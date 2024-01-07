import React from 'react'
import DashboardHeader from '../dashboard/Header'

function DashboardMainLayout({children} : {children: React.ReactNode}) {
  return (
    <div className="flex">
    <div className="sidebar h-screen bg-gray-800 text-white w-64">
        sidebar
    </div>
    <main className="children w-full">
        <DashboardHeader/>
        {children}

    </main>
</div>
  )
}

export default DashboardMainLayout