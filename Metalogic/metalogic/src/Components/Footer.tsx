import { FaCircleRight } from "react-icons/fa6"; 
const Footer=()=>{
 return (
    <footer className="w-full min-h-screen  mt-2 py-12 flex flex-col ">
        <div className="p-2 ">
            <div className="py-6 px-3 z-20 gap-6  flex flex-col items-center justify-center">
                <h1 className="text-3xl  font-semibold font-serif">Get In Touch With Our Team</h1>
                <form className=" flex  flex-col  gap-6 p-4  w-full  md:w-1/2  bg-gradient-to-r from-primarycolor-500/50 via-primarycolor-600/20  to-primarycolor-500 rounded-lg">
                 <div className="flex  flex-col  md:flex-row gap-2 ">
                  <label className="flex flex-col gap-1 text-[12px]  w-full md:w-1/2 font-serif">Name
                    <input type="text" placeholder="Jane Smith" className="   py-5 px-3 rounded-lg  
                    outline-none  bg-primarycolor-400  bg-opacity-50 text-base " />
                  </label>
                  <label className="flex flex-col gap-1 text-[12px]  w-full  md:w-1/2 font-serif">Email
                    <input type="email" placeholder="Jane@gmail.com" className="py-5 px-3 rounded-lg bg-primarycolor-400  bg-opacity-50 outline-none
                    text-base " />
                  </label>
                 </div>
                 <div className=" flex flex-col md:flex-row gap-2 ">
                  <label className="flex flex-col gap-1 text-[12px] font-serif w-full md:w-1/2">Phone
                    <input type="text" placeholder="(123) 456_789" className=" w-full  py-5 px-3 rounded-lg  bg-primarycolor-400  bg-opacity-50 outline-none 
                    text-base  placeholder:text-[16px]"  />
                  </label>
                  <label className="  flex flex-col gap-1 text-[12px] font-serif  w-full  md:w-1/2 ">Budget
                   <select className="py-5 px-3 rounded-lg  bg-primarycolor-400  bg-opacity-50 outline-none 
                    text-base  placeholder:text-[16px]" >
                         <option value="" disabled>Select Amount</option>
                    <option className="text-base leading-3">&lt;1000</option>
                     <option className="text-base leading-3">&lt;2000</option>
                      <option className="text-base leading-3">&lt;3000</option>
                 </select>
                  </label>
                    </div>
                  <label className="flex flex-col gap-1 text-[12px] font-serif">
                   Leave us message 
                   <textarea  rows={10}  placeholder="Please type your message here" className="rounded-lg bg-primarycolor-400  bg-opacity-50 outline-none p-3 "/>
                  </label>
                  <button className="border-2  bg-button  text-black text-center rounded-lg p-2 ">
                     <span className="text-[14px] font-serif ">Submit</span>
                  </button>
                </form>
            </div>
            <div className="flex  w-full items-center justify-center">
             <div className="flex flex-col justify-center items-center gap-2 ">
              <span className="rounded-2xl px-4 py-2  border-1 font-medium">Pricing</span>
               <h1 className="md:text-6xl  text-4xl font-medium text-center ">Revolutionize Your E-Commerce <br /> Business with</h1>
               <p className="text-[12px]  font-semibold py-2">Cutting-edge solutions designed to boost sales, streamline operations, and enhance customer experience.</p>
    <div className="md:grid p-2 md:w-[800px] w-[690px]   cursor-pointer gap-6  flex flex-col  md:grid-cols-3  ">
      <div className="p-5  w-full flex flex-col rounded-xl  bg-gradient-to-r from-purple-400/50 via-primarycolor-500/210 to-primarycolor-600">
        <div className="flex flex-col gap-2 items-start  md:items-center">
          <div className="p-2 ">
            <h1 className="font-semibold text-[18px]">Basic</h1>
            <span className="text-[14px] text-neutral-500 font-medium">Best for Personal use.</span>
            <h2 className="font-bold text-2xl">Free</h2>
          </div>
          <button className="w-full bg-button px-2 py-1 rounded-lg text-black">Get Started</button>
          <div className="flex flex-col gap-2 p-5 w-full">
            <h1 className="font-medium text-[14px]">What you will get</h1>
            <ul className="flex flex-col gap-2 items-start">
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">100GB Cloud storage</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Virtual machines</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Data backup</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Email Support</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Basic Analytics</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Reporting Analysis</p></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="p-5  cursor-pointer flex flex-col   lg:-translate-y-3 border-1 rounded-xl bg-gradient-to-r from-purple-400/50 to-primarycolor-600">
        <div className="flex flex-col gap-2  items-start  md:items-center">
          <div className="p-2 ">
            <h1 className="font-semibold text-[18px]">Professional</h1>
            <span className="text-[14px] text-neutral-500 font-medium">For growing businesses.</span>
            <h2 className="font-bold text-2xl">$99</h2>
          </div>
          <button className="w-full bg-button px-2 py-1 rounded-lg text-black">Get Started</button>
          <div className="flex flex-col gap-2 p-5 w-full">
            <h1 className="font-medium text-[14px]">What you will get</h1>
            <ul className="flex flex-col gap-2 items-start">
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">100GB Cloud storage</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Virtual machines</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Data backup</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Email Support</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Basic Analytics</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Reporting Analysis</p></li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className=" cursor-pointer p-5 flex flex-col rounded-xl  bg-gradient-to-r from-purple-400/50 to-primarycolor-600">
        <div className="flex flex-col gap-2  items-start  md:items-center">
          <div className="p-2">
            <h1 className="font-semibold text-[18px]">Enterprise</h1>
            <span className="text-[14px] text-neutral-500 font-medium">Best for large companies.</span>
            <h2 className="font-bold text-2xl">$1299</h2>
          </div>
          <button className="w-full bg-button px-2 py-1 rounded-lg text-black">Get Started</button>
          <div className="flex flex-col gap-2 p-5 w-full">
            <h1 className="font-medium text-[14px]">What you will get</h1>
            <ul className="flex flex-col gap-2 items-start">
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">100GB Cloud storage</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Virtual machines</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Data backup</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Email Support</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Basic Analytics</p></li>
              <li className="flex gap-2 items-center"><FaCircleRight /><p className="text-[12px] font-medium">Reporting Analysis</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

            </div>
            </div>
        </div>
    </footer>
 )
}
export default Footer;