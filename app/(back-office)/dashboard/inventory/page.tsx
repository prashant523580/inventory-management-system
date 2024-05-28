import FixedHeader from '@/components/dashboard/FixedHeader'
import { Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const CardOptions = ({ title, description, buttonTitle, icon, enabled, href }: { title: string, description: string, buttonTitle: string, icon: any, enabled?: boolean, href: string }) => {
  return (
    <div className="shadow bg-white p-4 text-center space-y-2">
      <h2>{title}</h2>
      <div className="">

        {icon}
      </div>
      <p className='capitalize'>{description}</p>
      <div className="flex flex-col justify-center items-center space-y-2">

        {
          enabled ?
          <button className='capitalize p-2 bg-gray-300 rounded'>enable</button> :
        <button className='capitalize p-2 bg-gray-300 rounded'>
          <Link href={href}>
            {buttonTitle}
          </Link>
        </button>
        }
      </div>
    </div>
  )
}
function InventoryPage() {
  let options = [
    {
      title: "Items Groups",
      buttonTitle: "new items group",
      description: "create  multiple variants of the same item using item groups",
      icon: <Shirt className='w-16 h-16 mx-auto' />,
      enabled: false,
      href: "/dashboard/inventory/items/new"
    },
    {
      title: "Items ",
      buttonTitle: "new item",
      description: "create  multiple variants of the same item using item groups",
      icon: <Shirt className='w-16 h-16 mx-auto' />,
      enabled: false,
      href: "/dashboard/inventory/items/new"
    },
    {
      title: "new Composite Item",
      buttonTitle: "new items group",
      description: "create  multiple variants of the same item using item groups",
      icon: <Shirt className='w-16 h-16 mx-auto' />,
      enabled: true,
      href: "/dashboard/inventory/items/new"
    },
    {
      title: "IPrice Lists",
      buttonTitle: "new items group",
      description: "create  multiple variants of the same item using item groups",
      icon: <Shirt className='w-16 h-16 mx-auto' />,
      enabled: true,
      href: "/dashboard/inventory/items/new"
    },
  ]
  return (
    <div className=''>
      <FixedHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 p-5 gap-5">
          {
            options.map((option) => (
              <CardOptions
                icon={option.icon}
                buttonTitle={option.buttonTitle}
                description={option.description}
                title={option.title}
                href={option.href}
                enabled={option.enabled}
              />
            ))
          }
      </div>
    </div>
  )
}

export default InventoryPage