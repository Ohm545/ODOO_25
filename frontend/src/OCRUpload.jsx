
import React, { useState } from 'react'

export default function OCRUpload({ onExtract }) {
  const [preview, setPreview] = useState(null)

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)

    // Placeholder: simulate OCR extraction
    setTimeout(() => {
      onExtract && onExtract({ amount: '123.45', date: '2025-10-04', vendor: 'Sample Vendor', currency: 'USD' })
    }, 800)
  }

  return (
    <div className="border rounded p-3">
      <label className="block text-sm font-medium text-gray-700 mb-2">Receipt Upload (OCR placeholder)</label>
      <input type="file" accept="image/*" onChange={handleFile} />
      {preview && (
        <img src={preview} alt="preview" className="mt-2 max-h-40 object-contain" />
      )}
    </div>
  )
}
