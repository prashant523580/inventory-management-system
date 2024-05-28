import FixedHeader from '@/components/dashboard/FixedHeader'
import React from 'react'

function InventoryLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-gray-300'>


            {children}

        </div>
    )
}

export default InventoryLayout