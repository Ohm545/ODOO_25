import React from 'react'

export default function ExpenseTable({ rows = [] }) {
  return (
    <div className="panel">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((r) => (
              <tr key={r.id}>
                <td>{r.date_of_expense}</td>
                <td>{r.vendor || r.category || r.description}</td>
                <td>{r.amount}</td>
                <td>{r.currency}</td>
                <td>{r.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', color: 'var(--muted)', padding: '18px' }}>
                No expenses yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
