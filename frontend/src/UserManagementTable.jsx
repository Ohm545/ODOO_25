import React from 'react'

export default function UserManagementTable({ users = [] }) {
  return (
    <div className="panel">
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.username}</td>
              <td>{u.role}</td>
              <td>(edit / delete placeholders)</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
