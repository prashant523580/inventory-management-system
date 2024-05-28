import DashboardBanner from '@/components/dashboard/Banner'
import SalesOverview from '@/components/dashboard/SalesOverview'
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Dashboard() {

  return (
    <div>
      <DashboardBanner/>
      <SalesOverview/>
    </div>
  )
}

export default Dashboard