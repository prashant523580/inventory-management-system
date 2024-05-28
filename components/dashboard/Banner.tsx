"use client"
import { CreditCard, X } from 'lucide-react'
import React from 'react'

function Banner() {
    const [hidden,setHidden] = React.useState<boolean>(false);
    return (
        <div className={`${hidden ? "hidden" : "flex"} justify-between  py-6 shadow`}>
            <div className="icon flex justify-center items-center w-1/6"><CreditCard className='h-16 w-16 ' /></div>
            <div className="text w-3/6">

                <h2 className='font-medium text-2xl'>Start accepting online payments</h2>
                <p>
                    Businesses are moving towards online payments as they&apos;re easy, secure  and fast. Try them for your business today
                </p>
            </div>
            <div className="button w-1/6  flex justify-center items-center">

                <button className="enable bg-blue-600 text-white p-2 rounded">Enable</button>
            </div>
            <div className="button w-1/6 flex justify-center items-center ">

                <button onClick={() => setHidden(true)} className="close  flex justify-center items-center "><X className='w-5 h-5' /></button>
            </div>
        </div >
    )
}

export default Banner