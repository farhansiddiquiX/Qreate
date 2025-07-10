import React, { useState } from 'react'
import QRCode from 'qrcode'
import { FiDownload } from 'react-icons/fi'
import './QrGen.css'

function QrGen() {
  const [url, setUrl] = useState("")
  const [lastUrl, setLastUrl] = useState("")    
  const [qrcode, setQrcode] = useState("")
  const [loaded, setLoaded] = useState(false)

  const GenerateQRCode = () => {
    if (!url || url === lastUrl) return      
    setLoaded(false)
    QRCode.toDataURL(url, { width: 800, margin: 2 }, (err, dataUrl) => {
      if (err) return console.error(err)
      setQrcode(dataUrl)
      setLastUrl(url)                             
    })
  }

  return (
    <div className="qr-cont">
      <h1>QR Code Generator</h1>

      <div className="qr-form">
        <input
          type="text"
          placeholder='e.g. "www.google.com" or "farhan@okaxis"'
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button
          onClick={GenerateQRCode}
          disabled={!url || url === lastUrl}
        >
          Create QR Code
        </button>
      </div>

      {qrcode && (
        <>
          <p className="qr-info">
            QR for: <strong>{url}</strong>
          </p>
          <img
            src={qrcode}
            alt="Generated QR"
            className={`qr-img ${loaded ? 'loaded' : ''}`}
            onLoad={() => setLoaded(true)}
          />
          <a href={qrcode} download="qrcode.png" className="download-link">
            <FiDownload size={20} /> <span>Download</span>
          </a>
        </>
      )}
    </div>
  )
}

export default QrGen
