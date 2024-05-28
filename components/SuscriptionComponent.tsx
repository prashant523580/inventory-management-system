"use client"
// SubscriptionComponent.js
import { useState } from 'react';

function SubscriptionComponent() {
    const [subscription, setSubscription] = useState(null);
    const [showNotification,setShowNotification] = useState<boolean>(false)
    const  subscribe =  async() => {
        try {
            console.log(true,"subscribe")

            const serviceWorker = await navigator.serviceWorker.ready;
            console.log(serviceWorker)
            const subscriptions: any = await serviceWorker.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array('BKYR4up3PT1UcnskcefodbZiV6WL31gPJPthrnGz_GOZS7yZ-QLL3IvPGiWf5vXjIia8n4lqFExcqXz-mKI2Qgc'),
            });
            console.log(subscriptions)
            // Send the subscription object to your server
           let res = await fetch(`${process.env.NEXT_PUBLIC_API}/subscribe`, {
                method: 'POST',
                body: JSON.stringify(subscriptions),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            let data = await res.json();
            console.log(data)
            setSubscription(subscription);
        } catch (error) {
            console.error('Error subscribing:', error);
        }
    }

    return (
        <>
            {
            //     showNotification &&
            // <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 max-w-screen-xs fixed top-0 z-50 left-[50%] -translate-x-[50%]" role="alert">
            //     <div className="flex items-center">
            //         <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            //             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            //         </svg>
            //         <span className="sr-only">Info</span>
            //         <h3 className="text-lg font-medium">Allow Notification</h3>
            //     </div>
            //     <div className="mt-2 mb-4 text-sm">
            //         More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
            //     </div>
            //     <div className="flex">
            //         <button onClick={() => subscribe()} type="button" className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            //             <svg className="-ml-0.5 mr-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
            //                 <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            //             </svg>
            //             allow
            //         </button>
            //         <button type="button" onClick={() => setShowNotification(false)} className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
            //             Dismiss
            //         </button>
            //     </div>
            // </div>
            }

            {subscription ? (
                <p className='text-black fixed bottom-5 right-5 '>You are subscribed to push notifications.</p>
            ) : (
                <div className="fixed bottom-10 right-5 m-6 inline-flex w-fit z-40">
                    {/* <div
                        className="absolute bottom-0 left-2/4 right-2/4 top-auto z-10 inline-block -translate-x-2/4 translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-pink-700 p-2.5 text-xs"></div> */}
                    <button
                    onClick={subscribe}
                        className="flex items-center justify-center rounded-lg bg-indigo-400 p-2 text-center shadow-lg cursor-pointer">
                        <div>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="bell"
                                className="mx-auto w-5 text-white"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    fill="currentColor"
                                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            )}


        </>
    );
}

function urlBase64ToUint8Array(base64String: any) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

export default SubscriptionComponent;
