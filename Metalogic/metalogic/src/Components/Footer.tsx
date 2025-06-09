import { CircleCheck,Phone,Mail,MapPin } from 'lucide-react';
const Footer=()=>{
 return (
    <footer className="w-full min-h-screen  mt-2 py-12 flex flex-col ">
        <div className=" ">
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
                  <label className=" flex flex-col gap-1 text-[12px] font-serif  w-full  md:w-1/2 ">Budget
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
         <div className="flex p-2  w-full items-center justify-center">
             <div className="flex flex-col justify-center items-center gap-2 ">
              <span className="rounded-2xl px-4 py-2  border-1 font-medium">Pricing</span>
               <h1 className="md:text-6xl  text-4xl font-medium text-center ">Revolutionize Your E-Commerce <br /> Business with</h1>
               <p className="text-[12px]  font-semibold py-2">Cutting-edge solutions designed to boost sales, streamline operations, and enhance customer experience.</p>
             </div>    
          </div>      
    <div className="flex md:flex-row  justify-center flex-col py-3  px-5  cursor-pointer gap-4  ">
      <div className="p-2  md:w-72  w-full flex flex-col rounded-xl bg-primarycolor-500/70">
        <div className="flex flex-col gap-2 items-start ">
          <div className="p-2 ">
            <h1 className="font-semibold text-[18px]">Basic</h1>
            <span className="text-[14px] text-neutral-500 font-medium">Best for Personal use.</span>
            <h2 className="font-bold text-2xl">Free</h2>
          </div>
          <button className="w-full bg-button px-2 py-1 rounded-lg font-medium text-black">Get Started</button>
          <div className="flex flex-col gap-2 p-5 w-full">
            <h1 className="font-medium text-[14px]">What you will get</h1>
            <ul className="flex flex-col gap-2 items-start">
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">100GB Cloud storage</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Virtual machines</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Data backup</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Email Support</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Basic Analytics</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Reporting Analysis</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-2   md:w-72 w-full cursor-pointer flex flex-col   lg:-translate-y-3 rounded-xl bg-primarycolor-500/70">
        <div className="flex flex-col gap-2  items-start ">
          <div className="p-2 ">
            <h1 className="font-semibold text-[18px]">Professional</h1>
            <span className="text-[14px] text-neutral-500 font-medium">For growing businesses.</span>
            <h2 className="font-bold text-2xl">$99</h2>
          </div>
          <button className="w-full bg-button px-2 py-1 rounded-lg font-medium  text-black">Get Started</button>
          <div className="flex flex-col gap-2 p-5 w-full">
            <h1 className="font-medium text-[14px]">What you will get</h1>
            <ul className="flex flex-col gap-2 items-start">
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">100GB Cloud storage</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Virtual machines</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Data backup</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Email Support</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Basic Analytics</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Reporting Analysis</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative  md:w-72 w-full cursor-pointer p-2 flex flex-col rounded-xl bg-primarycolor-500/70">
        <div className="flex flex-col gap-2  items-start">
          <div className="p-2">
            <h1 className="font-semibold text-[18px]">Enterprise</h1>
            <span className="text-[14px] text-neutral-500 font-medium">Best for large companies.</span>
            <h2 className="font-bold text-2xl">$1299</h2>
          </div>
          <button className="w-full bg-button px-2 py-1 rounded-lg font-medium  text-black">Get Started</button>
          <div className="flex flex-col gap-2 p-5 w-full">
            <h1 className="font-medium text-[14px]">What you will get</h1>
            <ul className="flex flex-col gap-2 items-start">
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">100GB Cloud storage</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Virtual machines</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Data backup</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Email Support</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Basic Analytics</p></li>
              <li className="flex gap-2 items-center">< CircleCheck  /><p className="text-[12px] font-medium">Reporting Analysis</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full  flex flex-col items-center gap-6  justify-center px-8 py-12  bg-gradient-to-tr from-primarycolor-800 via-primarycolor-600 to-primarycolor-500/50 '>
      <div className='  bg-primarycolor-500  md:w-1/2 shadow-lg   w-full p-6 flex flex-col  gap-3 justify-center items-center  rounded-3xl'>
        <span className='rounded-2xl px-3 py-1 border-1'>Secure ,Fast and Flexible</span>
        <p className='md:text-4xl sm:text-2xl text-xl   text-center font-semibold '>Take The Next Step Towards Cloud <br />
        Transforamtion Today!
        </p>
        <p className='text-neutral-400 text-sm'>Unlock Innovation and Efficiency with Our Cloud Solutions.</p>
        <button className=' text-black bg-button rounded-lg px-3 py-1 w-36 font-medium text-[14px]'>Consultation Now</button>
        <p>For Consultation and  inquriy </p>
      </div>
      <div className='w-full p-1 flex justify-center'>
      <h1 className='lg:text-8xl sm:text-6xl  text-2xl font-semibold '>Power Your Business</h1>
      </div>
    </div>
    <div className='flex md:flex-row flex-col justify-between gap-6 p-2  '>
      <div className='px-5 py-2  flex flex-col gap-3'>
        <h1 className="text-4xl font-bold">MeatLogic</h1>
        <p className='text-2xl font-semibold'>Elevate Your Brand</p>
      </div>
      <div className=' flex md:flex-row flex-col gap-8 md:items-center items-start px-2 py-2 '>
        <div className='flex flex-col gap-3 md:items-center items-center font-medium'>
        <h1 className='text-xl'>Pages</h1>
        <a href="#" className='text-sm' >Home</a>
        <a href="#"  className='text-sm'>Service</a>
        <a href="#"  className='text-sm'>About</a>
        <a href="#"  className='text-sm' >FOA</a>
        </div>
      <div className='flex  flex-col gap-3 md:items-center items-start   font-medium'>
          <h1 className='text-xl'>Contact US</h1>
          <li className='flex gap-2 items-center'><Phone />+977 981245678</li>
          <li className='flex gap-2 items-center'><MapPin />KTM </li>
          <li className='flex gap-2 items-center'><Mail />Metalogic@gmail.com</li>
        </div>
      </div>
    </div>
    <div className="flex flex-col  items-center  px-5 mt-6">
     <hr className="w-full md:w-1/2 border-gray-300 mb-2" />
     <p className="text-sm text-gray-500">&copy; 2025 MeatLogic. All rights reserved.</p>
   </div>
</div>
</footer>
 )
}
export default Footer;