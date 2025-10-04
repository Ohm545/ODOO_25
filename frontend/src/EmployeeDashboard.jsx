import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './TopBar'
import ExpenseForm from './ExpenseForm'
import ExpenseTable from './ExpenseTable'

const mockRows = [
  { date: '2025-09-01', vendor: 'ACME', amount: '45.00', currency: 'USD', status: 'Pending' },
  { date: '2025-08-12', vendor: 'Coffee Co', amount: '5.75', currency: 'USD', status: 'Approved' }
]

export default function EmployeeDashboard() {
  return (
    <div className="app-shell">
      <Sidebar sections={[{ to: '/employee', label: 'Home' }, { to: '/employee/history', label: 'History' }]} />
      <div className="main">
        <Topbar />
        <div className="content">
          <ExpenseForm />
          <div>
            <h3 style={{margin:0,marginBottom:8}}>Expense History</h3>
            <ExpenseTable rows={mockRows} />
          </div>
        </div>
      </div>
    </div>
  )
}
