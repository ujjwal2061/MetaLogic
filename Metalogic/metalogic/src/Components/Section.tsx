import { Check , Star} from 'lucide-react';

const Section=()=>{
    return (
<section className="min-h-screen flex flex-col">

 <div className=" flex justify-center flex-col  gap-10  items-center  p-4 ">
    <div  className="relative mt-2  group border-transparent  rounded-full shadow-lg">
      <div className="absolute -inset-0.5  rounded-full bg-gradient-to-tl from-purple-700  to-purple-500  bg-opacity-75  blur-[5px]
        hover:bg-opacity-90 group-hover:scale-105 transition duration-300
        "></div>
       <button className=" relative leading-none divide-x  divide-gray-500   flex items-center space-x-2 rounded-full px-6 py-3 bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-800 text-white shadow-lg transition-all 
        hover:shadow-xl  focus:outline-none focus:ring-2 focus:ring-purple-300">
      <span className=" font-semibold">Why choose us </span>
      </button> 
     </div>
     <div className="  p-2 ">
     <h1 className="lg:text-6xl  font-bold  sm:text-5xl text-3xl text-center">The key Benfits of <br className="lg:block hidden" />Partnering</h1>
    </div>
  </div>

  <div className="flex   justify-center  flex-col md:flex-row  gap-3  md:px-20 px-4  py-4 ">
   <div  className=" p-3  flex flex-col gap-2  bg-gradient-to-r from-primarycolor-700  to-primarycolor-500  shadow-md  rounded-[16px] ">
     <div className="flex  flex-col px-1  ">
        <h6 className="text-base font-medium">Scalable Resources</h6>
        <p className="text-[14px] font-medium ">Our cloud infrastructure grows with your business</p>
     </div>

     <div className='p-2  bg-gradient-to-r from-primarycolor-500  to-primarycolor-800 rounded-[11px]'>
        <span className=' p-1 flex gap-2 items-center'>
            <Check  size={24} className='bg-gradient-to-l from-purple-500 to-purple-800  shadow-xl rounded-full px-1  '/>
         <p className='font-medium'>Cost Efficiency</p>
        </span>
        <div className='flex flex-col mt-2  gap-5 '>
            <div className='flex  gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
            <div className='flex  gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
             <div className='md:flex  sm:flex  hidden gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
             <div className='md:flex  sm:flex  hidden gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
              <div className='md:flex  sm:flex hidden  gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
            <div className='md:flex   sm:flex hidden  gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
             <div className='md:flex  sm:flex  hidden gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
             <div className='md:flex  hidden gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
              <div className=' md:flex  hidden   gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
            <div className='md:flex  hidden gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
             <div className='md:flex  sm:flex hidden  gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
             <div className='md:flex  sm:flex hidden  gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
               <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-600  to-primarycolor-400/30 '></div>
            </div>
        </div>
     </div>
   </div>
  <div  className="  lg:max-h-60 p-3 flex flex-col gap-2  bg-gradient-to-r from-primarycolor-700  to-primarycolor-500  shadow-md  rounded-[16px] ">
     <div className='flex flex-col gap-4 p-1 '>
        <h5 className='font-medium text-base '>Reduced IT Expenses</h5>
        <p className='text-[12px] font-medium'>Cut down on hardware costs and maintenance with  our affordable <br className='lg:block hidden' /> cloud solutions</p>
       <div>
        <div className='flex flex-row gap-6 justify-center '>
        {Array.from({length:5}).map((_,index)=>(
            <img  key={index} src="https://i.pinimg.com/736x/d9/7f/aa/d97faa4ca82603ea39b68b534f63b89a.jpg" className='object-contain rounded-full  shadow-lg h-16 w-16' />
        ))}
        </div>
       </div>
     </div>
   </div>
 <div  className=" lg:flex hidden p-3  flex-col gap-2  max-h-60 bg-gradient-to-r from-primarycolor-700  to-primarycolor-500  shadow-md  rounded-[16px] ">
     <div className='flex flex-col gap-2 p-1 '>
        <h5 className='font-medium text-base '>Expert Teams</h5>
        <div className='rounded-xl flex  items-center  p-2  gap-4 bg-gradient-to-r from-primarycolor-500  to-primarycolor-800  '>
          <img src="https://i.pinimg.com/736x/d6/36/d5/d636d53048eccf75fed71e3add231b94.jpg" className='object-contain rounded-full  shadow-lg h-10 w-10' />
          <div className='flex  flex-col  p-2  w-full'>
            <h1 className='font-semibold'>Harry P</h1>
           <div className="flex flex-row gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
          <Star   key={index} className="w-5 h-5 bg-gradient-to-t from-primarycolor-600  to-primarycolor-700 rounded-full  p-0.5  fill-yellow-300 text-yellow-300"  /> ))}
          </div>
          </div>
        </div>
         <div className='rounded-xl flex  items-center  p-2  gap-4 bg-gradient-to-r from-primarycolor-500  to-primarycolor-800  '>
          <img src="https://i.pinimg.com/736x/d9/7f/aa/d97faa4ca82603ea39b68b534f63b89a.jpg" className='object-contain rounded-full  shadow-lg h-10 w-10' />
          <div className='flex  flex-col  p-2  w-full'>
            <h1 className='font-semibold'>Jimmy L</h1>
           <div className="flex flex-row gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
          <Star  key={index} className="w-5 h-5 bg-gradient-to-t from-primarycolor-600  to-primarycolor-700 rounded-full  p-0.5  fill-yellow-300 text-yellow-300"  /> ))}
          </div>
          </div>
        </div>
     </div>
   </div>
 
  </div>
</section>
    )
}
export  default Section;