'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
    } else if (session.user.role !== 'admin') {
      router.push('/user')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      <p>Your role: <strong>{session.user.role}</strong></p>
      <p>Email: {session.user.email}</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Admin Actions</h2>
        <ul>
          <li>Manage Users</li>
          <li>System Settings</li>
          <li>Analytics</li>
        </ul>
      </div>
    </div>
  )
}
