
import { Check , Star,UserCircle, Atom} from 'lucide-react';
import {motion} from "motion/react"
const Section=()=>{
  /// image
  interface Image {
   img:string
  }
  // array
  const Img:Image[]=[
    {img:"https://i.pinimg.com/736x/d9/7f/aa/d97faa4ca82603ea39b68b534f63b89a.jpg"},
    {img:"https://i.pinimg.com/736x/9c/9f/5b/9c9f5b0d39c014d41be7dc3bed53cbea.jpg"},
    {img:"https://i.pinimg.com/736x/d6/36/d5/d636d53048eccf75fed71e3add231b94.jpg"},
    {img:"https://i.pinimg.com/736x/dd/28/f6/dd28f6b1a70004221d8dda9de6c15a6a.jpg"},
    {img:"https://i.pinimg.com/736x/b3/e5/db/b3e5db5a3bf1399f74500a6209462794.jpg"}
  ]
const scrollDistance = Img.length * (56 + 12);

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
     <div className="p-2">
     <h1 className="lg:text-6xl  font-bold  sm:text-5xl text-3xl text-center">The key Benfits of <br className="lg:block hidden" />Partnering</h1>
    </div>
  </div>
  <motion.div 
   initial={{opacity:0,
   filter:'blur(12px)',
   y:10   
   }}
   whileInView={{
      y:0,
      opacity:1,
      filter:"blur(0px)"
   }}
   transition={{
      duration:0.6,  delay:0.4, ease:'easeInOut'
   }}
  className="flex  justify-center flex-col md:flex-row  gap-3 md:px-20 px-4  py-4 ">
   <div
   className=" p-3  flex flex-col gap-2  bg-gradient-to-r from-primarycolor-700  to-primarycolor-500  shadow-md  rounded-[16px] ">
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
          <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-400 to-secondarycolor '></div>
            </div>
            <div className='flex  gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
          <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-400 to-secondarycolor '></div>
            </div>
             <div className='md:flex  sm:flex  hidden gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
          <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-400 to-secondarycolor '></div>
            </div>
             <div className='md:flex  sm:flex  hidden gap-2 items-center' >
                <div className='h-3 w-3 shadow-3xl rounded-full  bg-primarycolor-700'></div>
          <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-400 to-secondarycolor '></div>
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

<div className='flex-col flex gap-2 p-1 '>
   <div className='flex gap-2 '>
  <div  className="lg:max-h-60 p-3 flex flex-col  md:w-96 w-full gap-2  bg-gradient-to-r from-primarycolor-700  to-primarycolor-500  shadow-md  rounded-[16px] ">
     <div className='flex flex-col gap-4 p-1 '>
        <h5 className='font-medium text-base '>Reduced IT Expenses</h5>
        <p className='text-[12px] font-medium'>Cut down on hardware costs and maintenance with  our affordable <br className='lg:block hidden' /> cloud solutions</p>
        <div className=' p-2  z-20  overflow-hidden '>
        <motion.div
          initial={{x:"-0%"}}
          animate={{ x: `-${scrollDistance}px` }}
          transition={{
             repeatType: "loop",
             repeat: Infinity, 
             duration:15,
             ease: "linear" 
            }}
            className=' min-w-max  flex flex-row lg:gap-6 sm:gap-10 gap-4 justify-center '>
        {Img.map(( pic,index)=>(
           <img key={index} src={pic.img} className='object-contain h-14 w-14 flex-shrink-0  rounded-full' />
         ))}
        </motion.div>
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
<div className='flex sm:flex-col lg:flex-row  gap-2'>
   <div  className="lg:max-h-60  hidden  md:w-72 w-full p-3 lg:flex flex-col gap-2  bg-gradient-to-r from-primarycolor-700  to-primarycolor-500  shadow-md  rounded-[16px] ">
     <div className='flex  h-full flex-col   justify-center items-center  gap-2 p-1 '>
     <h1 className='md:text-2xl  text-xl font-medium'>Automatic Updates</h1>
     <div className='flex flex-col relative items-center justify-center gap-2 p-1 w-full h-full'>
      <Atom  size={72} className='animate-spin '/>
     </div>   
     </div>
   </div>

     <div  className="lg:max-h-64 lg:w-96  sm:w-full p-2 flex flex-col gap-2  bg-gradient-to-r from-primarycolor-700  to-primarycolor-500  shadow-md  rounded-[16px] ">
     <div className='flex flex-col gap-4 p-1 '>
        <h5 className='font-medium text-base '>Business Continuity</h5>
        <p className='text-[12px] font-medium'>Ensure uninterrupted operations with robust backup solutions and disaster recovery plans</p>
        <div className=' flex flex-col gap-1 '>
      <div className='flex   gap-2 bg-gradient-to-r from-primarycolor-600 to-primarycolor-500  p-4 rounded-l-medium  items-center' >
           <UserCircle />
         <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-400  to-secondarycolor '></div>
      </div>
         <div className='flex  gap-2  bg-gradient-to-r from-primarycolor-600 to-primarycolor-500   p-4 rounded-l-medium  items-center' >
          <UserCircle />
          <div className='h-2 w-full shadow-2xl rounded-full bg-gradient-to-l from-primarycolor-400 to-secondarycolor '></div>
      </div>
       </div>
     </div>
   </div>
   </div>
 </div>
  </motion.div>
</section>
    )
}
export  default Section;