const express = require('express')
const Docker = require('dockerode')
const fs = require('fs').promises
const path = require('path')
const { exec } = require('child_process')
const util = require('util')
const execAsync = util.promisify(exec)

const app = express()
const port = process.env.DOCKER_ORCHESTRATOR_PORT || 3001

// Docker client
const docker = new Docker({
  socketPath: process.env.DOCKER_HOST || '/var/run/docker.sock'
})

// Middleware
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Create website container
app.post('/api/containers', async (req, res) => {
  try {
    const { projectId, subdomain, files } = req.body
    
    // Create directory for website files
    const sitePath = path.join(process.env.BASE_PATH || '/var/www/pi-website-builder/sites', projectId)
    await fs.mkdir(sitePath, { recursive: true })
    
    // Write files
    for (const file of files) {
      const filePath = path.join(sitePath, file.path)
      await fs.mkdir(path.dirname(filePath), { recursive: true })
      await fs.writeFile(filePath, file.content, 'utf8')
    }
    
    // Create nginx configuration
    const nginxConf = `
server {
    listen 80;
    server_name ${subdomain}.${process.env.BASE_DOMAIN || 'pi-website.dev'};
    root ${sitePath};
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
    `
    
    const nginxConfPath = path.join(sitePath, 'nginx.conf')
    await fs.writeFile(nginxConfPath, nginxConf, 'utf8')
    
    // Create Docker container
    const container = await docker.createContainer({
      Image: 'nginx:alpine',
      name: `pi-website-${projectId}`,
      HostConfig: {
        Binds: [`${sitePath}:/usr/share/nginx/html:ro`],
        NetworkMode: process.env.TRAEFIK_NETWORK || 'traefik'
      },
      Labels: {
        'traefik.enable': 'true',
        'traefik.http.routers.${subdomain}.rule': `Host(\`${subdomain}.${process.env.BASE_DOMAIN || 'pi-website.dev'}\`)`,
        'traefik.http.routers.${subdomain}.entrypoints': 'websecure',
        'traefik.http.routers.${subdomain}.tls.certresolver': 'letsencrypt'
      }
    })
    
    await container.start()
    
    res.json({
      success: true,
      containerId: container.id,
      liveUrl: `https://${subdomain}.${process.env.BASE_DOMAIN || 'pi-website.dev'}`
    })
    
  } catch (error) {
    console.error('Container creation error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Delete container
app.delete('/api/containers/:containerId', async (req, res) => {
  try {
    const container = docker.getContainer(req.params.containerId)
    await container.stop()
    await container.remove()
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// List containers
app.get('/api/containers', async (req, res) => {
  try {
    const containers = await docker.listContainers({ all: true })
    res.json(containers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update website files
app.put('/api/containers/:projectId/files', async (req, res) => {
  try {
    const { projectId } = req.params
    const { files } = req.body
    
    const sitePath = path.join(process.env.BASE_PATH || '/var/www/pi-website-builder/sites', projectId)
    
    // Update files
    for (const file of files) {
      const filePath = path.join(sitePath, file.path)
      await fs.mkdir(path.dirname(filePath), { recursive: true })
      await fs.writeFile(filePath, file.content, 'utf8')
    }
    
    // Restart container to pick up changes
    const containers = await docker.listContainers({ all: true })
    const containerInfo = containers.find(c => c.Names.some(n => n.includes(projectId)))
    
    if (containerInfo) {
      const container = docker.getContainer(containerInfo.Id)
      await container.restart()
    }
    
    res.json({ success: true })
    
  } catch (error) {
    console.error('File update error:', error)
    res.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Docker orchestrator listening on port ${port}`)
})