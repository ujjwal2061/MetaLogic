import { useAnimate,motion } from "motion/react";
import { ArrowBigRight } from "lucide-react";
import { useEffect } from "react";
import { stagger } from "motion";

const Hero=()=>{
    const [scope ,animate]=useAnimate();
    useEffect(()=>{
    startaniamtion();
    },[])
    const startaniamtion=()=>{
   animate(
    "span",{
     opacity:1,
     filter:"blur(0px)",
     y:0
    },{
        duration:0.8,
        ease:"easeInOut",
        delay:stagger(0.2)
    },),
    animate(
    "div",{
    opacity:1,
     filter:"blur(0px)",
     y:0
    },{
        duration:0.9,
        ease:"easeInOut",
        delay:0.5
    },
   )
    }
  const text =`We are committed to offering state-of-the-art software solutions that enable companies 
            to prosper in the digital world.`;
    return(
     <section  ref={scope} className="  bg-gradient-to-t  from-blue-950 via-blue-600 to-blue-950 
       flex justify-center items-center text-white min-h-screen ">
          <motion.div 
           style={{
               opacity:1,
               filter:"blur(10px)"
            }}
            className="main rounded-md  text-center w-full  max-w-2xl p-4">
        <motion.h1 
          style={{
              opacity:1,
              x:10
            }}
            className="md:text-[55px]  p-4   font-bold gap-1 sm:text-5xl text-xl leading-snug">
        Transforming Today
         <br/><span>For</span><br />
        Digital Tomorrow
        </motion.h1>
    
       {text.split("  ").map((word,index)=>(
        <motion.span style={{
            opacity:0,
            filter:'blur(10px)',
            y:10
        }} key={word + index}
        className="inline-block">
        {word} 
        </motion.span>
       ))}
         <div className=" mt-2   flex justify-center items-center">
     <button className="group rounded-lg flex items-center gap-2 px-5 py-3 font-semibold text-white bg-navcolor bg-opacity-50 hover:bg-red-500 transition-all duration-300 ease-in-out">
      Get in Touch
     <ArrowBigRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
    </button>
    </div>
      </motion.div>
     </section>
    )
}
export default Hero;