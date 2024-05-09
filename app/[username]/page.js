import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation"
import connectDB from "@/db/connectDb";
import User from "@/models/User";
import React from "react";

const Username = async ({params}) => {
  const checkUser = async () => {
    await connectDB()
    let u = await User.findOne({username: params.username})
    if(!u){
      return notFound()
    }
  }
  await checkUser()

  return (
    <>
     <PaymentPage username={params.username}/>
    </>
  )
}

export default Username;

export async function generateMetadata({params}) {
  return{
  title: `${params.username} Page - GetUsBuyUs`, 
  description: `This is the user page.`
  }
}
