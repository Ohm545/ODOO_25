
import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ sections = [] }) {
  return (
    <aside className="sidebar">
      <div className="brand">ExpenseApp</div>
      <nav>
        {sections.map((s) => (
          <Link key={s.to} to={s.to} className="nav-link">
            {s.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
