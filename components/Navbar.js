"use client";
import React, {useState, useEffect} from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className="bg-gray-900 text-white flex tab:flex-row phone:gap-2 phone:flex-nowrap justify-between phone:px-6 tab:px-10 py-4 items-center sticky top-0 w-full z-50">
      <Link href={"/"}><div className="logo flex gap-2 cursor-pointer items-center">
          <img width={40} src="/Logo Cart.png" alt="logo"/><span className="text-lg font-bold tab:block phone:hidden">GetUsBuyUs</span></div></Link>
      <ul className="flex phone:flex-col-reverse tab:flex-row tab:gap-6 phone:gap-2 font-semibold phone:items-end tab:items-center relative">
        {session && (<><button onBlur={()=> {setTimeout(()=>{setShowDropdown(false)}, 300)}} onClick={()=>{setShowDropdown(!showDropdown)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg phone:px-2 text-sm tab:px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
            >Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
            </button>
            <div id="dropdown" className={`z-10 ${showDropdown?"":"hidden"} phone:top-24 phone:right-0 tab:top-12 tab:left-36 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li><Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link></li>
                <li><Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link></li>
                <li><Link onClick={() => {signOut()}} href="/login" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link></li>
              </ul>
            </div>
          </>
        )}
        {session && (<button onClick={() => {signOut()}} className="border border-white rounded-xl px-4 py-2 font-semibold hover:bg-blue-700 transition-all duration-300">Logout</button>)}
        {!session && (<Link href={"/login"}><button className="border border-white rounded-xl px-4 py-2 font-semibold hover:bg-blue-700 transition-all duration-300">Login</button></Link>)}
      </ul>
    </nav>
  );
};

export default Navbar;
