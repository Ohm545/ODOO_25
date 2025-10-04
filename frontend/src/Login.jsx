import React, { useState } from 'react'
import { useAuth } from './auth'

export default function Login() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('employee')

  function handleSubmit(e) {
    e.preventDefault()
    login(username || 'user', role)
  }

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--bg)'}}>
      <form onSubmit={handleSubmit} style={{background:'var(--panel)',padding:20,borderRadius:10,boxShadow:'0 2px 6px rgba(16,24,40,0.06)',width:'100%',maxWidth:420}}>
        <h2 style={{margin:0,marginBottom:12,fontSize:22,fontWeight:700,color:'var(--brand)'}}>Sign in</h2>
        <div style={{marginBottom:8}}>
          <label style={{display:'block',marginBottom:6,color:'var(--muted)'}}>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #e6eefc'}} />
        </div>

        <div style={{marginBottom:12}}>
          <label style={{display:'block',marginBottom:6,color:'var(--muted)'}}>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #e6eefc'}}>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div>
          <button className="btn" style={{width:'100%'}}>Sign in</button>
        </div>
      </form>
    </div>
  )
}
