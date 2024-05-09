import Link from "next/link";



export default function Home() {

  return (
    <>
    <main className="text-white w-full flex my-28 justify-center">
      <div className="flex flex-col items-center gap-4 phone:px-4">
        <div className="flex phone:flex-col tab:flex-row items-center phone:gap-2 tab:gap-10">
        <div className="mainHeading flex flex-col gap-2 phone:text-center tab:text-end">
          <h1 className="font-bold phone:text-2xl tab:text-3xl">Let Them To Get Us <br /><span className="text-red-500">and Try Our Service</span></h1>
          <p className="phone:text-base tab:text-xl font-semibold">The top place where you get your perfect value</p>
        </div>
        <span><img className="invert w-36" src="/truck.png" alt="main image"/></span>
        </div>
        <div className="buttons flex gap-5">
        <Link href={"/login"}>
          <button className="border rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 transition-all duration-300">
            Start Now</button>
        </Link>
        <Link href={"/about"}>
          <button className="border rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 transition-all duration-300">
            Learn More</button>
        </Link>
        </div>
      </div>
    </main>
    <div className="w-full h-[2px] opacity-10 bg-white"></div>
    <div className="second my-20 phone:px-4">
      <h1 className="text-2xl font-bold my-6 text-center">Your fans are waiting for your service</h1>
      <div className="items flex phone:gap-10 phone:flex-col tab:flex-row justify-between mx-auto w-[80%] my-14">
      <div className="item flex flex-col phone:gap-6 tab:gap-2 justify-center items-center">
        <img width={150} className="bg-slate-600 p-2 rounded-full" src="/service.gif" alt="service"/>
        <div className="text-center">
        <p className="text-lg font-bold">Fund Yourself</p>
        <p className="text-sm">Fans can help you</p>
        </div>
      </div>
      <div className="item flex flex-col phone:gap-6 tab:gap-2 justify-center items-center">
        <img width={150} className="bg-slate-600 p-2 rounded-full" src="/Reach.gif" alt="reach"/>
        <div className="text-center">
        <p className="text-lg font-bold">Reach Yourself</p>
        <p className="text-sm">Fans can reachout to your service</p>
        </div>
      </div>
      <div className="item flex flex-col phone:gap-6 tab:gap-2 justify-center items-center">
        <img width={150} className="bg-slate-600 p-2 rounded-full" src="/time.gif" alt="time"/>
        <div className="text-center">
        <p className="text-lg font-bold">Scehedule Yourself</p>
        <p className="text-sm">Get perfect value of your time</p>
        </div>
      </div>
      </div>
    </div>
    <div className="w-full h-[2px] opacity-10 bg-white"></div>
    <div className="third my-20 phone:px-4">
    <h1 className="text-2xl font-bold my-6 text-center">Learn More About Us</h1>
    <div className="video flex justify-center my-14">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ipkPcrNsCv8?si=KfQ0Gqh0nFWGr8Ea" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </div>

    </>
  );
}
