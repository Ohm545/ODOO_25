
import React, { useState } from 'react'
import OCRUpload from './OCRUpload'

export default function ExpenseForm() {
  const [form, setForm] = useState({ amount: '', date: '', vendor: '', currency: '' })

  return (
    <div className="panel">
      <h3 style={{margin:0,marginBottom:10,fontSize:18,fontWeight:600}}>Submit Expense</h3>
      <OCRUpload onExtract={(data) => setForm((f) => ({ ...f, ...data }))} />

      <div className="grid" style={{marginTop:12}}>
        <input placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
        <input placeholder="Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <input placeholder="Vendor" value={form.vendor} onChange={(e) => setForm({ ...form, vendor: e.target.value })} />
        <input placeholder="Currency" value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })} />
      </div>

      <div style={{marginTop:12,textAlign:'right'}}>
        <button className="btn">Submit</button>
      </div>
    </div>
  )
}
