import React from 'react'
import { useAuth } from './auth'

export default function Topbar() {
  const { user, logout } = useAuth()
  return (
    <header className="topbar">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="username">
        {user && (
          <>
            <div>
              <div className="font-medium">{user.username}</div>
              <div className="text-xs" style={{color:'var(--muted)'}}>{user.role}</div>
            </div>
            <button onClick={logout} className="btn" style={{marginLeft:12}}>Logout</button>
          </>
        )}
      </div>
    </header>
  )
}
