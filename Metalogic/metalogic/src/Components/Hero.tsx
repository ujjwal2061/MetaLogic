
import { RefreshCcw , Home,} from "lucide-react";
import { FiFigma } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BsSlash } from "react-icons/bs";
import { CiGrid41 ,CiCalendar , CiHome} from "react-icons/ci";
import { motion} from "motion/react"
import { useState,useEffect } from "react"


const Hero=()=>{
  const [mouseCursor, setMouseCursor] = useState("default"); 
  const [mousePosition,setmousePostion]=useState({
        x:0,
        y:0
    }) // -> getting postion of the Mouse 

    useEffect(()=>{
    const mousemMove=(e:MouseEvent)=>{
     setmousePostion({
      x: e.clientX, //  x mouse Event
      y: e.clientY // Y mouse Event 
     })
    }
    
     window.addEventListener("mousemove",mousemMove)
    return ()=>{
        window.removeEventListener("mousemove",mousemMove)
    }
    },[])

    const mosueVaritants={
      default:{
        x:mousePosition.x-7,
        y:mousePosition.y-7,
        backgroundColor: "transparent",
        opacity: 1,
        backdropFilter: "blur(2px)",
      },
   text: {
      height:"40px",
      width:"40px",
      x: mousePosition.x - 7,
      y: mousePosition.y - 7,
      scale: 1.5,
      backgroundColor: "transparent",
      transition: { duration: 0.1, ease: "linear" },
    },
    }
    // text
    const text="Transforming Today For Digital Tomorrow" 

    const splitText=(text:string)=>{
       return text.split("")
    }

    //
    const textEnter = () => setMouseCursor("text");
    const textLeave = () => setMouseCursor("default");
    //
    const maindiv={
      hover:{
        transition:{
          staggerChildren:0.3
        }
      }
    }
   // for the 3 div 
 //  main Section for Animation like  
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // this where child div so on this time between 
      delayChildren:0.5
    },
  },
};
//  this for the child animation
const childVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5 }
},
};
    return (
    <section  className="relative  cursor-none flex flex-col gap-10  py-16  justify-center items-center  h-[calc(100vh-6rem)] px-5  w-full ">
      <motion.p
      variants={maindiv}
      initial="inital"
      whileHover="hover" 
      onMouseEnter={textEnter} onMouseLeave={textLeave}
      className="flex  items-center
       sm:text-3xl md:text-4xl text-[19px] font-semibold 
       ">
        {splitText(text).map((cha ,idx)=>(
          <motion.span
           whileHover={{
              filter:"blur(0px)",
              scale:1.5
          }}
          initial={{
            filter:"blur(0px)"
          }}
          transition={{type:"spring", stiffness:300 ,}}
          key={idx}
           className="inline-block  "
          >{cha === " "? "\u00A0":cha}</motion.span>
        ))}
      </motion.p> 
      <div 
       onMouseEnter={textEnter} onMouseLeave={textLeave}
       className=" px-2 sm:text-[16px] text-[12px]">
        <p className="text-center font-bold text-purple-500 ">
         We deliver  {" "}
         <span className="text-white font-medium ">
        cutting-edge software solutions designed to help businesses 
        <br />thrive in today’s digital landscape.
        </span>
        </p>
      </div>

     <motion.div  
       initial={{
         opacity:0,
         y:100
       }}
       animate={{
        opacity:1,
        y:0
       }}
       transition={{
        duration:0.7, delay:0.2,
          ease: "easeOut"
       }}
      className="relative mt-2  group border-transparent  rounded-full shadow-lg">
      <div className="absolute -inset-0.5  rounded-full bg-gradient-to-tl from-purple-700  via-slate-200  to-purple-500  bg-opacity-75  blur-[15px]
        hover:bg-opacity-90 group-hover:scale-105 transition duration-300
        "></div>
    <button className=" relative leading-none divide-x  divide-gray-500   flex items-center space-x-2 rounded-full px-6 py-3 bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-800 text-white shadow-lg transition-all 
    hover:shadow-xl  focus:outline-none focus:ring-2 focus:ring-purple-300">
      <span className="pl-2 font-semibold">Start Now</span>
      <span className=" sm:block hidden pl-6 text-[16px] text-purple-200">Just one click to your products</span>
   </button> 
    </motion.div>

    {/*  Dot Point*/ }
     <motion.div 
      className="cursor.dot"
       variants={mosueVaritants}
       animate={mouseCursor} 
          transition={{ duration: 0.1, ease: "linear" }}
          style={{
          backgroundColor: "rgba(50,33,102,0.5)",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          top:0,
          left:0,
          width:"20px",
          height:"20px",
          borderRadius:"50%",
          mixBlendMode:"difference",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(2px)", 
     }}>
     </motion.div>
  {/*Three Div Section*/}
  <motion.div 
   variants={staggerContainer}
      initial="hidden"
      animate="show"
   className=" hidden sm:flex flex-col sm:flex-row p-2 justify-center items-end gap-6 sm:gap-10 w-full relative">
  {/*First Div*/}
  <motion.div 
   variants={childVariants}
  className="relative  translate-y-3  w-full lg:w-46 h-52 lg:h-56  shadow-xl  from-primarycolor-400  to-primarycolor-600 flex flex-col  px-2 py-6  gap-3    rounded-3xl ">
   <div  className="   flex md:justify-center h-full  w-full">
      <div className="absolute  w-full  -right-2   flex gap-2  lg:gap-14 items-center   justify-start">
      <li className="flex items-center gap-2 lg:gap-15  px-3 py-1 rounded-lg" style={{ backgroundColor: "rgb(55,38,105)" }}>
      <FaUser  className=" shadow-2xl  text-[18px] lg:text-[26px] text-white" />
      <BsSlash  className="rotate-45 text-white text-[20px] font-bold lg:text-[24px]"/>
      </li>
      <li className="flex items-center gap-1 px-3 py-1 rounded-lg" style={{ backgroundColor: "rgb(55,38,105)" }}>
       <CiCalendar  className="text-white text-[18px]  fill-white lg:text-[24px]"/>
       <BsSlash  className="rotate-45 text-[20px] font-bold  text-white" />
     </li>
      <li className="flex items-center gap-1 px-3 py-1 rounded-lg" style={{ backgroundColor: "rgb(55,38,105)" }}>
      <CiGrid41  className="text-white text-[18px] lg:text-[24px]" />
      <BsSlash className="text-[20px] font-bold   lg:text-[26px] hidden lg:block rotate-45 text-white" />
    </li>
  </div>
    <div className="flex flex-row-reverse  w-full absolute gap-2 lg:gap-16 justify-start  left-0 top-16 mt-3  ">
       <li className="flex items-center gap-1 px-3 py-1 rounded-lg" style={{ backgroundColor: "rgb(55,38,105)" }}>
      <FaUser   className="text-white text-[20px] lg:text-[24px]"/>
     <BsSlash className=" hidden lg:block text-[20px] font-bold   lg:text-[26px] rotate-45 text-white" />
    </li>
    <li className="flex items-center gap-2 lg:gap-15  px-3 py-1 rounded-lg" style={{ backgroundColor: "rgb(55,38,105)" }}>
      <CiHome  className="text-white text-[20px] lg:text-[24px]" />
      <BsSlash className="rotate-45 text-white text-[12px] lg:text-[24px]" />
    </li>
    <li className="flex items-center gap-1 px-3 py-1 rounded-lg" style={{ backgroundColor: "rgb(55,38,105)" }}>
     <CiGrid41 className="text-white text-[20px] lg:text-[24px]" />
     <BsSlash className="text-[20px] font-bold   lg:text-[26px] rotate-45 text-white" />
    </li>
    </div>
    </div>
      <svg className="absolute  rounded-3xl inset-0 w-full h-full pointer-events-none z-10"
     xmlns="http://www.w3.org/2000/svg"
     preserveAspectRatio="none">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.08" />
  </svg>
  <div className="flex  absolute     w-full  top-32 justify-center  px-2 ">
  <span className="text-base  text-[16px] lg:text-[26px] font-semibold text-white">
    We build your <span className="text-purple-500">dream</span>
  </span>
  </div>
  </motion.div>
{/*Second Div*/}
 <motion.div 
 variants={childVariants}
 className="relative  gap-5 shadow-2xl -translate-y-6  bg-gradient-to-tl from-primarycolor-400  to-primarycolor-600 flex flex-col  px-2 py-6 w-full lg:w-46 h-52 lg:h-56 rounded-3xl ">
    <div className="  flex md:justify-center h-full rounded-lg w-full">
    <svg className="absolute  rounded-3xl inset-0 w-full h-full pointer-events-none z-10"
     xmlns="http://www.w3.org/2000/svg"
     preserveAspectRatio="none">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.08" />
  </svg>
   <div className="absolute   lg:w-full  px-5 flex gap-7 lg:gap-16  items-center   justify-center">
      <li className="flex items-center px-2 py-2  rounded-full" style={{ backgroundColor: "rgb(55,38,105)" }}>
      <FiFigma  className="text-white shadow-2xl  text-[18px] lg:text-[26px]" />
      </li>
      <li className="flex items-center px-2 py-2 rounded-full" style={{ backgroundColor: "rgb(55,38,105)" }}>
       <RefreshCcw  className="text-white  shadow-2xl text-[18px] lg:text-[26px] " />
     </li>
      <li className="flex items-center px-2 py-2 rounded-full" style={{ backgroundColor: "rgb(55,38,105)" }}>
      <FiFigma className="text-white shadow-2xl   text-[18px] lg:text-[26px]" />
    </li>
  <div 
    style={{
    backgroundImage: 'repeating-linear-gradient(to right, gray 0, gray 1px, transparent 1px, transparent 6px)',
  }}
    className="h-1  sm:w-[100px]  lg:w-[200px] top-[14px] -z-10 px-0 right-10 lg:right-28 absolute"></div>
    </div>
  <div className="flex lg:mt-4 mt-2  flex-col absolute   top-16 justify-center  px-2 ">
    <h1 className="text-[18px] lg:text-[26px] font-semibold">Figam Integration</h1>
    <p className="text-sm  text-neutral-300">Streamline Work across desgin</p>
  </div>
  </div>
  </motion.div>
  {/*Third Div*/}
<motion.div 
variants={childVariants}
className="relative  translate-y-3   w-full lg:w-46 h-52 lg:h-56   shadow-2xl  from-primarycolor-400  to-primarycolor-600 flex   px-3  py-6  gap-3   rounded-3xl ">
     <svg className="absolute  rounded-3xl inset-0 w-full h-full pointer-events-none z-10"
     xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.08" />
  </svg>
   <div className="rounded-lg p-2   lg:w-1/2 w-full flex  flex-col  gap-2  bg-gradient-to-t from-primarycolor-400  to-primarycolor-500 ">
   <span className="flex  items-center gap-3  "><Home  className="fill-white"/>
    <div className=" w-1/2   rounded-lg h-1.5  border-2 bg-white"></div>
   </span>
   <div className="flex  p-1  flex-col gap-[10px] ">  
     <div className=" w-full   rounded-lg h-2  border-2 bg-white"></div>
     <div className=" w-full   rounded-lg h-2  border-2 bg-white"></div>
     <div className=" w--full   rounded-lg h-2  border-2 bg-white"></div>
   </div>
   <div className="flex flex-col gap-1  items-start">
   <h1 className=" text-start  lg:text-2xl text-xl font-semibold">Project Updates</h1>
  <p className="text-slate-200  text-[12px]  font-bold ">Keep You Infrom</p>
   </div>
  </div>

  <div className="hidden lg:flex flex-col  w-1/2 justify-center items-start p-2 text-white text-sm gap-3 ">
    <p className= "font-medium text-[18px]  italic ">Stay on top of every task and update effortlessly.</p>
     <svg 
    className="w-48 h-6  -mt-2  flex items-start" 
    viewBox="0 0 200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10 C60 80, 140 -20, 190 30"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />
  </svg>
    <button className="bg-white text-primarycolor-600 px-4 py-1 rounded-full text-xs font-semibold shadow hover:bg-gray-100 transition">
      View Dashboard
    </button>
  </div> 
</motion.div>
</motion.div>
</section>
    )
}
export default Hero;