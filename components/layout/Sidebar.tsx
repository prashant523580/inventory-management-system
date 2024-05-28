"use client"
import { BaggageClaim, BarChart3, Cable, FileText, Home, Plus, ShoppingBag, ShoppingCart, Ungroup } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import SubscriptionCard from '../dashboard/SubscriptionCard';
import DropdownLink from './LinkDropdown';

function Sidebar() {
    const navlinks = [
        {
            label: "Home",
            href: "/dashboard/home",
            icon: <Home className="w-4 h-4" />,
            children: [

            ]
        },
        {
            label: "Inventory",
            href: "/dashboard/inventory",
            icon: <BaggageClaim className="w-4 h-4" />,
            children: [
                {
                    icon: <Plus />,
                    label: "items",
                    href: "/dashboard/inventory/items"
                },
                {
                    icon: <Ungroup />,
                    label: "Items Groups",
                    href: "/dashboard/inventory/itemgroups"
                },
                {
                    icon: "icon",
                    label: "adjustments",
                    href: "/dashboard/inventory/adjustments"
                },
            ]
        }, {
            label: "Sales",
            href: "/dashboard/sales",
            icon: <ShoppingCart className="w-4 h-4" />,
            children: [
                {
                    icon: <Plus />,
                    label: "customers",
                    href: "/dashboard/sales/customers"
                },
                {
                    icon: <Ungroup />,
                    label: "sales orders",
                    href: "/dashboard/sales/sales-orders"
                },
                {
                    icon: <Ungroup />,
                    label: "Packages",
                    href: "/dashboard/sales/packages"
                },
                {
                    icon: <Ungroup />,
                    label: "Shipments",
                    href: "/dashboard/sales/shipments"
                },
                {
                    icon: <Ungroup />,
                    label: "Invoices",
                    href: "/dashboard/sales/invoices"
                },
                {
                    icon: <Ungroup />,
                    label: "Sales Receipts",
                    href: "/dashboard/sales/sales-receipts"
                },
                {
                    icon: <Ungroup />,
                    label: "Payment Received",
                    href: "/dashboard/sales/payment-received"
                },
                {
                    icon: <Ungroup />,
                    label: "Sales Returns",
                    href: "/dashboard/sales/sales-returns"
                },
                {
                    icon: <Ungroup />,
                    label: "Credit notes",
                    href: "/dashboard/sales/credit-notes"
                },
            ]
        },
        {
            label: "Purchases",
            href: "/dashboard/purchases",
            icon: <ShoppingBag className="w-4 h-4" />,
            children: []
        },
        {
            label: "Integrations",
            href: "/dashboard/integrations",
            icon: <Cable className="w-4 h-4" />,
            children: []
        },
        {
            label: "Reports",
            href: "/dashboard/reports",
            icon: <BarChart3 className="w-4 h-4" />,
            children: []
        },
        {
            label: "Documents",
            href: "/dashboard/documents",
            icon: <FileText className='w-4 h-4' />,
            children: []
        }
    ]

    function ActiveLink({ href, label, icon, className }: { href: string, label: string, icon: React.ReactNode, className?: string }) {
        // const router = useRouter();
        const pathname = usePathname();
        // const handleClick = (e: any) => {
        //     e.preventDefault()
        //     router.push(href)
        // }
        return (
            <Link role="link" aria-label={label} href={href as string} className={`${pathname === href ? "  bg-blue-500 " : " hover:bg-blue-400  "}   text-white transition-all rounded flex items-center space-x-2 capitalize ${className}`}>
                {icon}
                <span>{label}</span>
            </Link>
        )
    }
    return (
        <div className="sidebar flex flex-col h-screen bg-gray-900 text-white w-74 sticky top-0">
            <div className="flex flex-col p-3">
                {/* Logo */}
                <div className="flex space-x-2 ">
                    <ShoppingCart />
                    <span className='font-bold text-2xl'>Inventory</span>
                </div>
                {/* End Logo */}
            </div>
            {/* Links */}
            <div className="flex flex-col p-3 bg-gray-800 h-screen overflow-y-auto   space-y-2">
                {
                    navlinks.map((link, ind) => (
                        <div key={ind}>
                            <div className="child px-2 ">
                                {
                                    link.children.length > 0 ?
                                        <DropdownLink
                                            link={
                                                <ActiveLink className='p-2' key={ind} href={link.href} label={link.label} icon={link?.icon} />

                                            }
                                        >
                                            {

                                                link.children.map((childlink, ind) => (

                                                    <ActiveLink className='px-1 py-1.5' key={ind} href={childlink.href} label={childlink.label} icon={childlink?.icon} />

                                                ))
                                            }
                                        </DropdownLink>
                                        :
                                        <ActiveLink className='p-2' key={ind} href={link.href} label={link.label} icon={link?.icon} />

                                }
                            </div>
                        </div>
                    ))
                }
                <div className=" mt-auto p-1">
                    <SubscriptionCard />
                </div>
            </div>
            {/* End Links */}
            <div className="sidebutton mt-auto text-center">
                {"<-"}
            </div>
        </div>
    )
}

export default Sidebar