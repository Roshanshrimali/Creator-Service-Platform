import React from "react";

const About = () => {
  return (
    // This is about page of GetUsBuyUs web app.
    <>
      <div className="first mx-auto w-[80%] my-6 bg-slate-900 p-10 rounded-lg">
      <h1 className="text-3xl font-bold my-6 text-center">About Us - GetUsBuyUs</h1>
      <div className="w-full h-[2px] opacity-10 bg-white"></div>
        <div className="second my-20">
            <h1 className="text-2xl font-bold my-6 text-center">Who We Are?</h1>
            <p className="text-center max-w-lg mx-auto">
            GetUsBuyUs is a platform that connects creators with clients,
            facilitating service collaboration and engagement.
            </p>
        </div>

        <div className="w-full h-[2px] opacity-10 bg-white"></div>

        <div className="second my-20">
          <h1 className="text-2xl font-bold my-6 text-center">Our Mission</h1>
          <p className="text-center max-w-lg mx-auto">
            At GetUsBuyUs, our mission is to empower creators by providing them
            with a platform to showcase their skills and services, connecting
            them with clients who value their work.
          </p>
        </div>

        <div className="w-full h-[2px] opacity-10 bg-white"></div>

        <div className="third my-20">
          <h1 className="text-2xl font-bold my-6 text-center">
            Why Choose Us?
          </h1>
          <div className="text-start max-w-lg mx-auto">
            <p className="mb-4">- Secure authentication using NextAuth</p>
            <p className="mb-4">
              - Efficient navigation management with useRouter from Next.js
            </p>
            <p className="mb-4">- Seamless routing using Link from Next.js</p>
            <p className="mb-4">
              - Dynamic user profiles with earnings and fan interaction
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

export const metadata = {
    title: "About - GetUsBuyUs", 
    description: "This is the about page."
  }