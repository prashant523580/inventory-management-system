import React from 'react'

function SubscriptionCard() {
  return (
    <div className='bg-slate-900 p-3 rounded-lg'>
        <p className='text-xs  pb-1'>Your <strong>Premium</strong> plan&apos;s trail expires in {" "} 
        <span className='text-orange-500 text-xs'>10 days</span>
        </p>
        <div className="links text-xs flex space-x-1 border-t text-center">
            <button className='border-r pr-1 p-2'>Change plan</button>
            <button className='p-2'>Upgrade</button>
        </div>
    </div>
  )
}

export default SubscriptionCard