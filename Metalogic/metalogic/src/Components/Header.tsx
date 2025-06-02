import {  useState } from "react"
import {Link} from "react-router"
import {AnimatePresence, motion} from "motion/react"
import { Menu  ,X} from "lucide-react"
interface Link{
    lable?:string,
    link?:string
}
// array of the links
const link:Link[]=[
  {lable:"Home" ,link:"/"},
  {lable:"Service" ,link:"#"},
  {lable:"About" ,link:"#"},
  {lable:"FQA" ,link:"#"},
  {lable:"Contact" ,link:"#"}

]

const  Header=()=>{
    let  [activeId,setActiveId]=useState(link[0].lable)
    const [IsOpen ,setOpen]=useState<boolean>(false) 
    

    return(
<header className=" realtive w-auto flex  items-center justify-between px-1 ">
    <div>
    <Link to="/" className="text-base font-semibold">MetaLogic</Link>
    </div>

    <div className="lg:flex relative    hidden  font-semibold gap-8  items-center justify-between px-2 ">
    {link.map((item)=>(
       <Link to={`${item.link}`}  key={item.lable} 
       onClick={()=>setActiveId(item.lable)}
       className={`${activeId=== item.lable ? "text-white":"hover:text-white"} relative  px-3 py-1.5`}
       >
        {activeId=== item.lable && (
            <motion.div
            layoutId="active-pill"
            transition={{duration:0.3}}
            style={{borderRadius:9999}}
            className="absolute  inset-0 bg-purple-500 bg-opacity-25 border-transparent  "></motion.div>     
        )}
        <span className="relative z-10 flex items-center ">{item.lable}</span></Link>
    ))}
    </div>

        <button onClick={()=>setOpen(!IsOpen)} 
        className="md:hidden  hover:rounded-full z-30 shadow-md/20   hover:bg-purple-400 hover:bg-opacity-30  p-1.5 ">
        {IsOpen  ? <X size={26} />:  <Menu size={26} />}
        </button>
     <button className="md:block hidden  items-center justify-center rounded-md border
      border-slate-300 bg-white text-slate-900 hover:bg-slate-100 text-sm font-medium px-4 py-1 
      transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400">
     Start Now
     </button>

        <AnimatePresence>
  {IsOpen && (
      <motion.div 
      initial={{scale:0,opacity:0}}
      animate={{scale:1,opacity:1}}
      exit={{scale:0,opacity:0}}
      transition={{duration:0.8,type:"spring"}}
      className=" md:hidden   z-20 absolute right-[6px] bg-gradient-to-t from-primarycolor-500 to-primarycolor-800 rounded-lg top-[62px] p-2 
      transform  origin-top w-full sm:w-60 min-h-64 flex flex-col px-2 items-center gap-4  ">
    {link.map((item)=>(
        <Link to={`${item.link}`}  key={item.lable} 
        onClick={()=>setActiveId(item.lable)}
        className={`${activeId=== item.lable ? "text-white":"hover:text-white/50"} relative w-full  flex ite px-3 py-1.5`}
        >
        {activeId=== item.lable && (
            <motion.div
            layoutId="active-pill"
            transition={{duration:0.3}}
            style={{borderRadius:9999}}
            className="absolute  inset-0 bg-purple-500 bg-opacity-25 border-transparent  "></motion.div>     
        )}
        <span className="relative z-10 flex items-center  font-semibold">{item.lable}</span></Link>
))}
    </motion.div>
  )}
  </AnimatePresence>

</header>
)}
export  default Header;