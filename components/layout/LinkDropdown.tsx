"use client"
import React, { useEffect, useRef, useState } from 'react';




const DropdownLink = ({ label, children, link,active,className }: {
    label?:any, children?:React.ReactNode,link?:any,active?:any,className?:String
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });
  
    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div  className=" relative" x-data="{ dropdownOpen: false, notifying: true } "
            >

            <div
               
               ref={trigger}
               // onMouseEnter={() => setDropdownOpen(true)}
               className={`relative group ${active ? " underline " : "  "}`}
               >
                {link}
                <span 
                 onClick={() => setDropdownOpen(!dropdownOpen)}
                // className={`  group-hover:rotate-90 -rotate-90  font-bold transition-all`}
                className={` ${dropdownOpen ? " rotate-90 " : " -rotate-90 "}  font-bold transition-all  absolute right-2 top-3 text-white`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </div>
            {/* <!-- Dropdown Start --> */}
            <ul
                style={{
                    // height: dropdownOpen === true ? "auto": 0 +"px"
                    height: dropdownOpen === true ? React.Children.count(children)*44 : 0 +"px"
                }}
                ref={dropdown}
                // onMouseLeave={() => setDropdownOpen(false)}
                // onFocus={() => setDropdownOpen(true)}
                // onBlur={() => setDropdownOpen(false)}
                className={`${className} ${dropdownOpen ? " py-2 " : "    -z-10 overflow-hidden"} transition-all shadow-inner  space-y-2 px-2`}
                // className={`${className} list-none lg:group-hover:top-10 lg:top-20 lg:absolute h-0 group-hover:h-auto  lg:h-0 lg:group-hover:h-auto relative  w-full  left-0 right-0  transition-all duration-300 overflow-hidden group-hover:opacity-100 opacity-0  rounded-sm borderborder-stroke bg-white   shadow-default dark:border-strokedark dark:bg-boxdark 
                //     `}
            >
                {children}
            </ul>
            {/* <!-- Dropdown End --> */}
        </div>
    );
};

export default DropdownLink;
