
import ActiveLink from '@/components/layout/ActiveLink'
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HomeLayout({ children }: { children: React.ReactNode }) {
    const links = [
        {
            label: "Dashboard",
            href: "/dashboard/home/overview"
        },
        {
            label: "Getting Started",
            href: "/dashboard/home/getting-started"
        },
        {
            label: "Recent Updates",
            href: "/dashboard/home/updates",
        },
        {
            label: "Announcements",
            href: "/dashboard/home/announcements"
        },
    ]

    return (
        <div>
            <div className="h-32 flex flex-col pt-4 px-4 bg-gray-50 shadow">
                <div className="flex">
                    <div className="building w-12 h-12 flex items-center justify-center bg-white rounded-lg">
                        <Building2 />
                    </div>
                    <div className="flex flex-col">
                        <p className='text-2xl md:text-4xl'>Hello, Developer</p>
                        <span>Garat</span>
                    </div>
                </div>
                <nav className="sticky mt-auto bottom-0 space-x-2 flex">
                    {
                        links.map((link, ind) => (
                            <ActiveLink className='text-black border-b-2' key={ind} href={link.href} label={link.label} />
                        ))
                    }
                </nav>
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    )
}

export default HomeLayout