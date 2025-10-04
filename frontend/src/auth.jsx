import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (username, role) => {
    // mock login
    const u = { username, role }
    setUser(u)
    // redirect based on role
    if (role === 'employee') navigate('/employee')
    else if (role === 'manager') navigate('/manager')
    else navigate('/admin')
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
