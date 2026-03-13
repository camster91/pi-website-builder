'use client'

import { useState } from 'react'
import { Pin, X, CheckCircle, Loader2 } from 'lucide-react'

interface File {
  id: string
  name: string
  path: string
  content: string
}

interface PinData {
  id: string
  comment: string
  xPercent: number
  yPercent: number
  status: string
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
  const [pins, setPins] = useState<PinData[]>(initialPins)
  const [newPin, setNewPin] = useState<{ xPercent: number; yPercent: number } | null>(null)
  const [pinComment, setPinComment] = useState('')
  const [pinMode, setPinMode] = useState(false)
  const [savingPin, setSavingPin] = useState(false)

  const mainFile = files.find((f) => f.path === 'index.html')

  async function savePin() {
    if (!newPin || !pinComment) return
    setSavingPin(true)
    try {
      const res = await fetch('/api/pins', {
        method: 'POST',
        body: JSON.stringify({ projectId, ...newPin, comment: pinComment }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (!res.ok) throw new Error('Failed to save')
      const pin = await res.json()
      setPins([...pins, pin])
      setNewPin(null)
      setPinComment('')
      setPinMode(false)
    } catch (e) {
      alert('Error saving pin')
    } finally {
      setSavingPin(false)
    }
  }

  function handleIframeClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!pinMode) return
    const rect = e.currentTarget.getBoundingClientRect()
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100
    setNewPin({ xPercent, yPercent })
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Preview Area */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="bg-white rounded-xl shadow-lg border h-full overflow-hidden relative" onClick={handleIframeClick}>
          {mainFile && (
            <iframe
              srcDoc={mainFile.content}
              className="w-full h-full border-0"
              title="Preview"
            />
          )}
          {/* Pins Overlay */}
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="absolute w-4 h-4 bg-blue-600 rounded-full cursor-pointer border-2 border-white shadow-md z-20"
              style={{ left: `${pin.xPercent}%`, top: `${pin.yPercent}%` }}
              title={pin.comment}
            />
          ))}
          {/* New Pin Overlay */}
          {newPin && (
            <div className="absolute w-4 h-4 bg-red-500 rounded-full z-20" style={{ left: `${newPin.xPercent}%`, top: `${newPin.yPercent}%` }} />
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 bg-white border-l p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold">Project Controls</h2>
          <button onClick={() => setPinMode(!pinMode)} className={`px-3 py-1 text-sm rounded ${pinMode ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
            {pinMode ? 'Placing Pin...' : 'Add Pin'}
          </button>
        </div>

        {newPin && (
          <div className="p-4 bg-blue-50 rounded-lg mb-4">
            <textarea className="w-full p-2 border rounded mb-2" value={pinComment} onChange={e => setPinComment(e.target.value)} placeholder="Comment..." />
            <div className="flex gap-2">
              <button onClick={savePin} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">{savingPin ? 'Saving...' : 'Save'}</button>
              <button onClick={() => setNewPin(null)} className="px-3 py-1 bg-gray-200 rounded text-sm">Cancel</button>
            </div>
          </div>
        )}

        <div className="space-y-2">
          {pins.map(pin => (
            <div key={pin.id} className="p-3 border rounded text-sm">{pin.comment}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
