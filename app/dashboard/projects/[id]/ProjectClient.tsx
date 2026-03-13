'use client'

import { useState } from 'react'
import {
  Download,
  Globe,
  RefreshCw,
  Pin,
  X,
  CheckCircle,
  ExternalLink,
  AlertCircle,
  Loader2,
  Code,
  Eye,
  EyeOff,
} from 'lucide-react'

interface File {
  id: string
  name: string
  path: string
  content: string
  mimeType: string
  size: number
}

interface PinData {
  id: string
  comment: string
  xPercent: number
  yPercent: number
  status: string
  createdAt: string
}

interface ProjectClientProps {
  projectId: string
  projectName: string
  hasFiles: boolean
  liveUrl: string | null
  subdomain: string | null
  status: string
  files: File[]
  initialPins: PinData[]
}

export default function ProjectClient({
  projectId,
  projectName,
  hasFiles,
  liveUrl,
  subdomain,
  status,
  files,
  initialPins,
}: ProjectClientProps) {
  const [isDeploying, setIsDeploying] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [deployError, setDeployError] = useState('')
  const [deploySuccess, setDeploySuccess] = useState(false)
  const [currentLiveUrl, setCurrentLiveUrl] = useState(liveUrl)
  const [currentStatus, setCurrentStatus] = useState(status)
  const [pins, setPins] = useState<PinData[]>(initialPins)
  const [newPin, setNewPin] = useState<{ xPercent: number; yPercent: number } | null>(null)
  const [pinComment, setPinComment] = useState('')
  const [pinMode, setPinMode] = useState(false)
  const [savingPin, setSavingPin] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewKey, setPreviewKey] = useState(0)
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  async function handleDownload() {
    setIsDownloading(true)
    try {
      const res = await fetch(`/api/projects/${projectId}/export`)
      if (!res.ok) throw new Error('Export failed')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${projectName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.zip`
      a.click()
      URL.revokeObjectURL(url)
    } catch (e: any) {
      alert(e.message || 'Download failed')
    } finally {
      setIsDownloading(false)
    }
  }

  async function handleDeploy() {
    setIsDeploying(true)
    setDeployError('')
    setDeploySuccess(false)
    try {
      const res = await fetch(`/api/projects/${projectId}/deploy`, { method: 'POST' })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Deploy failed')
      setCurrentLiveUrl(data.liveUrl)
      setCurrentStatus('LIVE')
      setDeploySuccess(true)
    } catch (e: any) {
      setDeployError(e.message || 'Deployment failed')
    } finally {
      setIsDeploying(false)
    }
  }

  function handleIframeClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!pinMode) return
    const rect = e.currentTarget.getBoundingClientRect()
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100
    setNewPin({ xPercent, yPercent })
    setPinComment('')
  }

  async function savePin() {
    if (!newPin || !pinComment.trim()) return
    setSavingPin(true)
    try {
      const res = await fetch('/api/pins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId,
          xPercent: newPin.xPercent,
          yPercent: newPin.yPercent,
          comment: pinComment,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setPins((prev) => [data.pin, ...prev])
      setNewPin(null)
      setPinComment('')
    } catch (e: any) {
      alert(e.message || 'Failed to save pin')
    } finally {
      setSavingPin(false)
    }
  }

  async function resolvePin(pinId: string) {
    await fetch('/api/pins', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pinId, status: 'RESOLVED' }),
    })
    setPins((prev) => prev.map((p) => (p.id === pinId ? { ...p, status: 'RESOLVED' } : p)))
  }

  const pendingPins = pins.filter((p) => p.status === 'PENDING')
  const mainFile = files.find((f) => f.path === 'index.html')

  function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex flex-wrap gap-3 items-center">
        {hasFiles && (
          <>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-60"
            >
              {isDownloading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Download className="mr-2 h-4 w-4" />
              )}
              Download ZIP
            </button>

            {currentStatus !== 'LIVE' ? (
              <button
                onClick={handleDeploy}
                disabled={isDeploying}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-60"
              >
                {isDeploying ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Globe className="mr-2 h-4 w-4" />
                )}
                {isDeploying ? 'Deploying...' : 'Deploy Live'}
              </button>
            ) : (
              <a
                href={currentLiveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 font-medium rounded-lg hover:bg-green-200"
              >
                <Globe className="mr-2 h-4 w-4" />
                Visit Live Site
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            )}

            <button
              onClick={() => setPreviewKey((k) => k + 1)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </button>
          </>
        )}

        {deployError && (
          <div className="flex items-center text-red-600 text-sm">
            <AlertCircle className="mr-1 h-4 w-4" />
            {deployError}
          </div>
        )}
        {deploySuccess && (
          <div className="flex items-center text-green-600 text-sm">
            <CheckCircle className="mr-1 h-4 w-4" />
            Deployed! Live at{' '}
            <a href={currentLiveUrl || '#'} target="_blank" className="underline ml-1">
              {currentLiveUrl}
            </a>
          </div>
        )}
      </div>

      {/* Preview / Code Tabs */}
      {hasFiles && (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <div className="border-b flex items-center justify-between px-4">
            <div className="flex">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                  activeTab === 'preview'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Eye className="inline mr-1.5 h-4 w-4" />
                Preview
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                  activeTab === 'code'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Code className="inline mr-1.5 h-4 w-4" />
                Code
              </button>
            </div>
            {activeTab === 'preview' && (
              <button
                onClick={() => setPinMode((m) => !m)}
                className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition ${
                  pinMode
                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pinMode ? <EyeOff className="h-3.5 w-3.5" /> : <Pin className="h-3.5 w-3.5" />}
                {pinMode ? 'Exit Pin Mode' : 'Add Pins'}
              </button>
            )}
          </div>

          {activeTab === 'preview' ? (
            <div className="relative">
              {pinMode && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm px-3 py-1.5 rounded-full shadow">
                  Click anywhere on the preview to add a comment pin
                </div>
              )}

              {/* Iframe wrapper with pin overlay */}
              <div
                className="relative w-full"
                style={{ height: '600px', cursor: pinMode ? 'crosshair' : 'default' }}
                onClick={handleIframeClick}
              >
                <iframe
                  key={previewKey}
                  src={`/api/preview/${projectId}`}
                  className="w-full h-full border-0"
                  title="Website Preview"
                  sandbox="allow-scripts allow-same-origin"
                />

                {/* Pin overlays */}
                {pins.map((pin) => (
                  <div
                    key={pin.id}
                    className="absolute z-10 pointer-events-none"
                    style={{ left: `${pin.xPercent}%`, top: `${pin.yPercent}%` }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-white shadow flex items-center justify-center text-white text-xs font-bold -translate-x-1/2 -translate-y-1/2 ${
                        pin.status === 'RESOLVED' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    >
                      <Pin className="h-3 w-3" />
                    </div>
                  </div>
                ))}

                {/* New pin placement */}
                {newPin && (
                  <div
                    className="absolute z-30"
                    style={{ left: `${newPin.xPercent}%`, top: `${newPin.yPercent}%` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white shadow flex items-center justify-center text-white -translate-x-1/2 -translate-y-1/2">
                      <Pin className="h-3 w-3" />
                    </div>
                    <div className="absolute top-6 left-0 bg-white border shadow-lg rounded-lg p-3 w-64 z-40">
                      <textarea
                        autoFocus
                        placeholder="Add a comment..."
                        value={pinComment}
                        onChange={(e) => setPinComment(e.target.value)}
                        className="w-full border rounded p-2 text-sm resize-none"
                        rows={3}
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={savePin}
                          disabled={savingPin || !pinComment.trim()}
                          className="flex-1 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-60"
                        >
                          {savingPin ? 'Saving...' : 'Add Pin'}
                        </button>
                        <button
                          onClick={() => setNewPin(null)}
                          className="px-3 py-1.5 border text-sm rounded hover:bg-gray-50"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-0">
              {/* File list + viewer */}
              <div className="flex" style={{ height: '600px' }}>
                <div className="w-48 border-r bg-gray-50 overflow-y-auto">
                  {files.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFile(f)}
                      className={`w-full text-left px-3 py-2.5 text-sm border-b hover:bg-gray-100 transition ${
                        selectedFile?.id === f.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      <div className="font-medium truncate">{f.name}</div>
                      <div className="text-xs text-gray-400">{formatBytes(f.size)}</div>
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-auto bg-gray-900">
                  {selectedFile || mainFile ? (
                    <pre className="p-4 text-xs text-green-300 whitespace-pre-wrap font-mono leading-relaxed">
                      {(selectedFile || mainFile)?.content}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Select a file to view
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Pins Panel */}
      {pins.length > 0 && (
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Pin className="h-4 w-4 text-yellow-500" />
            Feedback Pins ({pendingPins.length} pending)
          </h3>
          <div className="space-y-3">
            {pins.map((pin) => (
              <div
                key={pin.id}
                className={`flex items-start justify-between p-3 border rounded-lg ${
                  pin.status === 'RESOLVED' ? 'opacity-60 bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="flex-1 mr-3">
                  <p className="text-sm">{pin.comment}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(pin.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      pin.status === 'RESOLVED'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {pin.status}
                  </span>
                  {pin.status === 'PENDING' && (
                    <button
                      onClick={() => resolvePin(pin.id)}
                      className="text-green-600 hover:text-green-800"
                      title="Mark as resolved"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
