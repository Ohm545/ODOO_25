import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './TopBar'
import ApprovalTable from './ApprovalTable'
import ExpenseTable from './ExpenseTable'
import Modal from './Modal'

const pending = [
  { requester: 'Alice', amount: '200.00', date: '2025-09-20', vendor: 'Hotel' }
]

const teamExpenses = [
  { date: '2025-09-10', vendor: 'Uber', amount: '30.00', currency: 'USD', status: 'Approved' }
]

export default function ManagerDashboard() {
  const [open, setOpen] = useState(false)
  const [rows] = useState(pending)

  function onApprove(row) {
    // open modal to capture comments
    setOpen(true)
  }

  function onReject(row) {
    setOpen(true)
  }

  return (
    <div className="app-shell">
      <Sidebar sections={[{ to: '/manager', label: 'Approvals' }, { to: '/manager/team', label: 'Team Expenses' }]} />
      <div className="main">
        <Topbar />
        <div className="content">
          <div>
            <h3 style={{margin:0,marginBottom:8}}>Pending Approvals</h3>
            <ApprovalTable rows={rows} onApprove={onApprove} onReject={onReject} />
          </div>

          <div>
            <h3 style={{margin:0,marginBottom:8}}>Team Expenses</h3>
            <ExpenseTable rows={teamExpenses} />
          </div>
        </div>

        <Modal open={open} title="Approval Comment" onClose={() => setOpen(false)}>
          <textarea style={{width:'100%',border:'1px solid #eef3ff',borderRadius:6,padding:8,height:120}} placeholder="Add comment" />
          <div style={{marginTop:12,textAlign:'right'}}>
            <button className="btn secondary" style={{marginRight:8}} onClick={() => setOpen(false)}>Cancel</button>
            <button className="btn" onClick={() => setOpen(false)}>Submit</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}
