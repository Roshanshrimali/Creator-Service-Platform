"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({})
  
  useEffect (() => {
   if(!session) {
    router.push("/login");
  } 
  else{
    getData()
  }
}, [router, session])

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setForm(u)
  }

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name)
    toast.success('Profile Updated', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
  }

  return (
    <main className="phone:px-4"> 
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
    <div className="tab:mx-auto tab:w-[60%] my-6 bg-slate-900 tab:px-8 tab:py-10 rounded-lg phone:px-8 phone:py-6">
      <h1 className="text-3xl font-bold mt-6 mb-10 text-center">Welcome to your Dashboard</h1>
      <form action={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Full name</label>
            <input value={form.name?form.name: ""} onChange={handleChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John" required/>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email address</label>
            <input value={form.email?form.email: ""} onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com" required/>
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
            <input value={form.username?form.username: ""} onChange={handleChange} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="johnmacy" required/>
          </div>
          <div>
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-white">Profile Picture</label>
            <input value={form.profilepic?form.profilepic: ""} onChange={handleChange} type="text" name="profilepic" id="profilepic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL"/>
          </div>
          <div>
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-white">Cover Picture</label>
            <input value={form.coverpic?form.coverpic: ""} onChange={handleChange} type="text" name="coverpic" id="coverpic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL"/>
          </div>
          <div>
            <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-white">Razorpay Id</label>
            <input value={form.razorpayid?form.razorpayid: ""} onChange={handleChange} type="password" name="razorpayid" id="razorpayid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="23456789"/>
          </div>
          <div>
            <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-white">Razorpay Secret</label>
            <input value={form.razorpaysecret?form.razorpaysecret: ""} onChange={handleChange} type="password" name="razorpaysecret" id="razorpaysecret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="23456789"/>
          </div>
          <div className="my-6">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Save</button>
          </div>
        </div>
      </form>
    </div>
    </main>
  );
};

export default Dashboard;
