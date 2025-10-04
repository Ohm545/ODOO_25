import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Topbar from './TopBar'
import ExpenseForm from './ExpenseForm'
import ExpenseTable from './ExpenseTable'

export default function EmployeeDashboard({ userId, companyId }) {
  const [expenses, setExpenses] = useState([])

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/expenses?user_id=${userId}`)
      console.log('Fetched expenses:', res.data);
      setExpenses(res.data)
    } catch (err) {
      console.error('Error fetching expenses:', err)
    }
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  return (
    <div className="app-shell">
      <Sidebar
        sections={[
          { to: '/employee', label: 'Home' },
          { to: '/employee/history', label: 'History' }
        ]}
      />
      <div className="main">
        <Topbar />
        <div className="content">
          {/* Pass userId, companyId, and refresh callback */}
          <ExpenseForm userId={1} companyId={1} onSuccess={fetchExpenses} />

          <div>
            <h3 style={{ margin: 0, marginBottom: 8 }}>Expense History</h3>
            <ExpenseTable rows={expenses} />
          </div>
        </div>
      </div>
    </div>
  )
}
