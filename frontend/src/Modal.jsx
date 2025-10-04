import React from 'react'

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(2,6,23,0.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'var(--panel)',borderRadius:8,width:'90%',maxWidth:720,padding:18}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
          <h3 style={{margin:0,fontSize:18,fontWeight:600}}>{title}</h3>
          <button onClick={onClose} className="btn secondary">Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
