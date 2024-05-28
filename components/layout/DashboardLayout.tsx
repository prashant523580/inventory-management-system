import React from 'react'
import DashboardHeader from '../dashboard/Header'
import Sidebar from './Sidebar'

function DashboardMainLayout({children} : {children: React.ReactNode}) {
  return (
    <div className="flex">
    <Sidebar/>
    <main className="children w-full">
        <DashboardHeader/>
        {children}

    </main>
</div>
  )
}

export default DashboardMainLayout