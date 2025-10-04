import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './TopBar'
import UserManagementTable from './UserManagementTable'
import ExpenseTable from './ExpenseTable'
import Modal from './Modal'

const users = [
  { username: 'alice', role: 'employee' },
  { username: 'bob', role: 'manager' }
]

const overview = [
  { date: '2025-09-10', vendor: 'Uber', amount: '50.00', currency: 'USD', status: 'Approved' }
]

export default function AdminDashboard() {
  const [openConfig, setOpenConfig] = useState(false)

  return (
    <div className="app-shell">
      <Sidebar sections={[{ to: '/admin', label: 'Users' }, { to: '/admin/workflow', label: 'Workflow' }]} />
      <div className="main">
        <Topbar />
        <div className="content">
          <div>
            <h3 style={{margin:0,marginBottom:8}}>User & Role Management</h3>
            <UserManagementTable users={users} />
          </div>

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h3 style={{margin:0}}>Approval Workflow</h3>
            <button className="btn" onClick={() => setOpenConfig(true)}>Configure</button>
          </div>

          <div>
            <h3 style={{margin:0,marginBottom:8}}>Company-wide Expense Overview</h3>
            <ExpenseTable rows={overview} />
          </div>
        </div>

        <Modal open={openConfig} title="Workflow Configuration" onClose={() => setOpenConfig(false)}>
          <div style={{display:'grid',gap:12}}>
            <div>
              <label style={{fontWeight:600}}>Multi-step flow</label>
              <div style={{color:'var(--muted)'}}>Placeholder UI for adding steps, approvers, and conditions.</div>
            </div>

            <div>
              <label style={{fontWeight:600}}>Conditional Rules</label>
              <div style={{color:'var(--muted)'}}>Add rules: percentage based, specific approver, hybrid.</div>
            </div>

            <div style={{textAlign:'right'}}>
              <button onClick={() => setOpenConfig(false)} className="btn">Save</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
