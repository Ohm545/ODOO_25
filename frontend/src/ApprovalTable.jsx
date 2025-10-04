import React from 'react'

export default function ApprovalTable({ rows = [], onApprove, onReject }) {
  return (
    <div className="panel">
      <table className="table">
        <thead>
          <tr>
            <th>Requester</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Vendor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.requester}</td>
              <td>{r.amount}</td>
              <td>{r.date}</td>
              <td>{r.vendor}</td>
              <td>
                <button onClick={() => onApprove?.(r)} className="btn secondary" style={{marginRight:8}}>Approve</button>
                <button onClick={() => onReject?.(r)} className="btn danger">Reject</button>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan="5" style={{textAlign:'center',padding:18,color:'var(--muted)'}}>No pending approvals</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
