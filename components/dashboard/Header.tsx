import { Bell, ChevronDown, History, LayoutDashboard, Plus, Search, Settings, User, UserRound, Users } from 'lucide-react'
import React from 'react'
import SearchComponet from './Search'

function DashboardHeader() {
    return (
        <div className='bg-gray-100 flex items-center justify-between px-8 h-12 shadow'>
            <div className="flex gap-3">
                {/* Recent Activities */}
                <button>
                    <History className='w-5 h-5' />
                </button>
                {/* End Recent Activities */}
                {/* Search */}
                <SearchComponet />
                {/* End Search */}
            </div>
            <div className="flex items-center gap-3">
                {/* plus icon */}
                <div className="div pr-2 border-r border-r-gray-300 ">
                    <button className='bg-blue-500 p-1 rounded'>
                        <Plus className='w-4 h-4 text-slate-50' />
                    </button>
                </div>
                {/* End Plus Icon */}
                <div className="flex space-x-2  border-r border-r-gray-300 ">
                    {/* User Icon */}
                    <button className='hover:bg-slate-300 p-1 '>
                        <Users className='w-4 h-4 text-slate-800 ' />
                    </button>
                    {/* End User Icon */}
                    {/* Notification Icon */}
                    <button className='hover:bg-slate-300 p-1 '>
                        <Bell className='w-4 h-4 text-slate-800 ' />
                    </button>
                    {/* End Notification Icon */}
                    {/* Setting Icon */}
                    <button className='hover:bg-slate-300 p-1 '>
                        <Settings className='w-4 h-4 text-slate-800 ' />
                    </button>
                    {/* End Setting Icon */}
                </div>
                <div className="flex gap-3">
                    <button className='flex items-center '>
                        <span>Garat</span>
                        <ChevronDown className='w-3 h-3' />
                    </button>
                    <button className='w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                        <UserRound className='w-5 h-5 text-slate-100 ' />
                    </button>
                    <button>
                        <LayoutDashboard  className='w-5 h-5 text-gray-800'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader