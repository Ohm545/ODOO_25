import React, { useState } from 'react'
import axios from 'axios'
import OCRUpload from './OCRUpload'

export default function ExpenseForm({ userId, companyId, onSuccess }) {
  const [form, setForm] = useState({
    amount: '',
    currency: '',
    category: '',
    description: '',
    date_of_expense: '',
    vendor: ''
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const payload = {
        user_id: userId,
        company_id: companyId,
        amount: form.amount,
        currency: form.currency,
        category: form.category || form.vendor,
        description: form.description,
        date_of_expense: form.date_of_expense,
        vendor: form.vendor
      }
  console.log('Submitting payload:', payload); // <--- Add this

      await axios.post('http://localhost:5000/expenses', payload)
      setMessage('Expense submitted successfully!')
      setForm({ amount: '', currency: '', category: '', description: '', date_of_expense: '', vendor: '' })

      // Refresh expense table
      onSuccess && onSuccess()
    } catch (err) {
      console.error(err)
      setMessage('Error submitting expense.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="panel">
      <h3 style={{ margin: 0, marginBottom: 10, fontSize: 18, fontWeight: 600 }}>Submit Expense</h3>

  <OCRUpload onExtract={(data) => setForm((f) => ({ ...f, ...data }))} />


      <div className="grid" style={{ marginTop: 12 }}>
        <input
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <input
          placeholder="Date"
          type="date"
          value={form.date_of_expense}
          onChange={(e) => setForm({ ...form, date_of_expense: e.target.value })}
        />
        <input
          placeholder="Vendor"
          value={form.vendor}
          onChange={(e) => setForm({ ...form, vendor: e.target.value })}
        />
        <input
          placeholder="Currency"
          value={form.currency}
          onChange={(e) => setForm({ ...form, currency: e.target.value })}
        />
        <input
          placeholder="Category / Description"
          value={form.description || form.category}
          onChange={(e) => setForm({ ...form, description: e.target.value, category: form.category || e.target.value })}
        />
      </div>

      {message && <div style={{ marginTop: 8, color: message.includes('Error') ? 'red' : 'green' }}>{message}</div>}

      <div style={{ marginTop: 12, textAlign: 'right' }}>
        <button className="btn" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  )
}
