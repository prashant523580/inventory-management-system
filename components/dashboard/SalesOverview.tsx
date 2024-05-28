import { CheckCircle } from 'lucide-react'
import React from 'react'
const SaleContent = ({ title, unit,number ,color}: { title: String,unit:String, number: number ,color: string}) => {
  return (
    <div className="box p-4 rounded shadow text-center text-gray-700 bg-white hover:shadow-blue-600 transition-all cursor-pointer">
      <small className={ color+' text-base md:text-xl font-bold '}>{number}</small>
      <h4 className='uppercase'>{unit}</h4>
      <div className="flex items-center text-sm space-x-1 justify-center">

        <CheckCircle className='w-4 h-4' />
        <span className='capitalize text-xs'>{title}</span>
      </div>
    </div>
  )
}
function SalesOverview() {
  const salesActivity = [
    {
      title:"To be Packed",
      number:10,
      unit:"qty",
      href:"#",
      color:"text-red-400"
    },
    {
      title:"To be Shipped",
      number:10,
      unit:"qty",
      href:"#",
      color:"text-blue-400"
    },
    {
      title:"To be Delivered",
      number:10,
      unit:"qty",
      href:"#",
      color:"text-green-400"
    },
    {
      title:"To be Invoiced",
      number:10,
      unit:"qty",
      href:"#",
      color:"text-yellow-400"
    },
  ]
  return (
    <div className='grid grid-cols-12 gap-4 bg-blue-100 p-4 md:p-8'>
      <div className="flex flex-col col-span-8">
        <h2>Sales Activity</h2>
        <div className="grid grid-cols-4 gap-3 py-4 md:border-r border-black px-2">
          {
            salesActivity.map((activity) => (
              <SaleContent color={activity.color} key={activity.title} title={activity.title} unit={activity.unit} number={activity.number} />
            ))
          }
        </div>
      </div>
      <div className="col-span-4">
        <h2>Inventory Summery</h2>
        <div className="flex flex-col px-2 space-y-1 py-4 text-gray-700">
          <div className="flex items-center space-x-1 justify-between hover:shadow-blue-600 cursor-pointer bg-white rounded shadow p-2">
            <span className='capitalize'>Quantity in hand</span>
            <span>10</span>
          </div>
          <div className="flex items-center space-x-1 justify-between hover:shadow-blue-600 cursor-pointer  bg-white rounded shadow p-2">
            <span className='capitalize'>Quantity to be Recieved</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesOverview