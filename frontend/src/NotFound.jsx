import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:48,margin:0}}>404</h1>
        <p style={{color:'var(--muted)'}}>Page not found</p>
        <Link to="/" className="btn secondary" style={{marginTop:12}}>Go home</Link>
      </div>
    </div>
  )
}
