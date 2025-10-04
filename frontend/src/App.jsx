import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import EmployeeDashboard from './EmployeeDashboard'
import ManagerDashboard from './ManagerDashboard'
import AdminDashboard from './AdminDashboard'
import NotFound from './NotFound'
import { useAuth } from './auth'

function App() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          user ? (
            user.role === 'employee' ? (
              <Navigate to="/employee" replace />
            ) : user.role === 'manager' ? (
              <Navigate to="/manager" replace />
            ) : (
              <Navigate to="/admin" replace />
            )
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="/employee/*" element={<EmployeeDashboard userId={1} companyId={1}/>} />
      <Route path="/manager/*" element={<ManagerDashboard />} />
      <Route path="/admin/*" element={<AdminDashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
