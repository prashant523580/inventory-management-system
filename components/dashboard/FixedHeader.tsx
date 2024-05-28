"use client"
import { BadgeHelp, ChevronDown, HelpingHand, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import React from 'react'

function FixedHeader() {
    const [isGridView,setIsGridView] = React.useState(false)
    return (
        <div className='flex justify-between px-4 py-6 bg-white'>
            <button className='flex items-center'>All items <ChevronDown className='w-4 h-4' /></button>
            <div className="flex gap-2">
                <button className='bg-blue-500 px-2 rounded flex items-center space-x-1 text-white text-sm'>
                    <Plus className='w-4 h-4 text-slate-50' />
                    <span>New</span>
                </button>
                <div className="flex bg-gray-200 border rounded overflow-hidden">
                    <button onClick={() =>setIsGridView(false)} className={`${!isGridView && 'bg-white shadow drop-shadow'} transition-all  p-2`}><List className='w-4 h-4' /></button>
                    <button onClick={() =>setIsGridView(true)} className={`${isGridView && 'bg-white shadow drop-shadow'} transition-all  p-2`}><LayoutGrid  className='w-4 h-4'/></button>
                </div>
                <button className='ml-2 bg-gray-200 border rounded overflow-hidden p-2'><MoreHorizontal className='w-4 h-4'  /></button>
                <button><BadgeHelp  className='w-4 h-4' /></button>
            </div>
        </div>
    )
}

export default FixedHeader