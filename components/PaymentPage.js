"use client"
import React, {useEffect, useState} from "react";
// import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PaymentPage = ({username}) => {
    const [paymentform, setPaymentform] = useState({name: "", message: "", amount: ""})
    const [currentUser, setCurrentUser] = useState({})
    const router = useRouter();
    // const { data: session } = useSession();
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()

    useEffect(()=>{
      getData()
    }, [])

    useEffect(() => {
      if(searchParams.get('paymentdone') == "true"){
        toast.success('Payment Done', {
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
      router.push(`${username}`)
    }, [])
    

    const handleChange = (e) =>{
        setPaymentform({...paymentform, [e.target.name]: e.target.value})
    }

    const getData = async () => {
      let u = await fetchuser(username)
      setCurrentUser(u)
      let dbpayments = await fetchpayments(username)
      setPayments(dbpayments)
    }

    //   useEffect (() => {
    //   if(!session) {
    //     router.push("/login");
    //   }
    // }, [router, session])

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "GetUsBuyUs", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }        
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

  return (
    <>
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

        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

        <div className="cover w-full relative flex justify-center">
        <img className='object-cover object-top w-full h-[250px]' src={currentUser.coverpic} alt="background Img"/>
        <div className="profile absolute -bottom-14 border-2 rounded-lg size-[120px] overflow-hidden">
          <img className='rounded-lg object-cover size-[120px]' src={currentUser.profilepic} alt="Profile Pic"/>
        </div>
      </div>
      <div className="info flex justify-center items-center my-16 flex-col gap-1">
        <div className='font-bold text-lg'>
        @{username}   
        </div>
        <div className='text-gray-400 text-sm'>Lets help {username} to motivate</div>
        <div className='text-gray-400 text-sm'>{payments.length} Payments . {currentUser.name} has raised ₹{payments.reduce((a,b) => a+b.amount, 0)} </div>
        <div className="payments flex tab:flex-row phone:flex-col phone:w-[95%] tab:w-[90%] gap-3 my-6">
          <div className="supports tab:w-1/2 bg-slate-900 rounded-lg phone:px-4 phone:py-6 tab:p-10">
            <h2 className='font-bold text-xl my-4'>Top 10 Supporters</h2>
            <ul className='mx-2'>
              {payments.length == 0 && <li>No payments yet</li> }
              {payments.map((p, i) =>{
                return<li key={i} className='my-4 flex items-center gap-2'><img width={30} src="/profile avtaar.gif" alt="profile"/><span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span></li>
              })}
            </ul>
          </div>
          <div className="makePayment tab:w-1/2 bg-slate-900 rounded-lg phone:px-4 phone:py-6 tab:p-10 flex flex-col gap-2">
            <div>
            <h2 className='font-bold text-xl'>Make Payment</h2>
            <p className='text-sm text-gray-400'>You have $0 in your wallet. <a className='text-blue-400 font-semibold py-1 px-2 border-blue-400' href=''>Add money</a></p>
            </div>
            <div className="flex flex-col gap-2">
              <input onChange={handleChange} value={paymentform.name} name="name" type="text" className='w-full rounded-lg p-3 outline-none bg-slate-800' placeholder='Enter Name' />
              <input onChange={handleChange} value={paymentform.message} name="message" type="text" className='w-full rounded-lg p-3 outline-none bg-slate-800' placeholder='Enter Message' />
              <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className='w-full rounded-lg p-3 outline-none bg-slate-800' placeholder='Enter Amount' />
              <div className="flex justify-end">
              <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} className='w-full rounded-lg p-3 bg-blue-700 transition-all duration-300 disabled:bg-slate-800' disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1}>Pay</button>
              </div>
            </div>
            <div className='flex gap-2 my-2'>
              <button className='rounded-lg p-3 bg-slate-800 hover:bg-blue-700 transition-all duration-300' onClick={()=>pay(1000)}>Pay ₹10</button>
              <button className='rounded-lg p-3 bg-slate-800 hover:bg-blue-700 transition-all duration-300' onClick={()=>pay(2000)}>Pay ₹20</button>
              <button className='rounded-lg p-3 bg-slate-800 hover:bg-blue-700 transition-all duration-300' onClick={()=>pay(3000)}>Pay ₹30</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default PaymentPage;
