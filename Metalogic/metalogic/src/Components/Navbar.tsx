import { useState } from "react";
import { Menu,X ,ChevronDown , ChevronUp } from "lucide-react";
export default function Navbara() {
    const [isOpen ,setOpen]=useState<boolean>(false)
    const [dropmenu,setdropmenu]=useState<boolean>(false)
    // main menu
    const showMenu=()=>{
        setOpen((prev)=>!prev)
    }
    // submenu bar
    const subdrop=()=>{
        setdropmenu((prev)=>!prev)
    }
    // type of this dropmen
interface DropdownItem {
  label: string;
  description: string;
  heref: string;
  icon: string;
}

const companyDropdownItems: DropdownItem[] = [
  {
    label: "Custom Software Development",
    description: "Tailored software solutions for your needs.",
    heref: "#",
    icon: "/images/custom-software.png"
  },
  {
    label: "Web Development",
    description: "Websites that work on all devices.",
    heref: "#",
    icon: "/images/web-development.png"
  },
  {
    label: "Mobile App Development",
    description: "Apps for phones and tablets.",
    heref: "#",
    icon: "/images/mobile-app.png"
  },
  {
    label: "Cloud Computing Services",
    description: "Use the internet to improve your business.",
    heref: "#",
    icon: "/images/cloud-computing.png"
  },
  {
    label: "Quality Assurance and Testing",
    description: "Checking software for reliability.",
    heref: "#",
    icon: "/images/quality-assurance.png"
  },
  {
    label: "UI/UX Designing",
    description: "Creating user-friendly interfaces.",
    heref: "#",
    icon: "/images/ui-ux-design.png"
  },
  {
    label: "Maintenance and Support",
    description: "Keeping your software running smoothly.",
    heref: "#",
    icon: "/images/maintenance-support.png"
  },
  {
    label: "Dev Ops",
    description: "Faster and safer software delivery.",
    heref: "#",
    icon: "/images/devops.png"
  },
  {
    label: "Blockchain Solutions",
    description: "Secure technology for your business.",
    heref: "#",
    icon: "/images/blockchain.png"
  }
];

  return (
 <div className="flex  sticky top-0  bg-navcolor text-white  py-1.5  border-b-1 border-blue-200 z-20  items-center justify-between gap-2  px-2">
    <div className="px-2">
        <a href="#" className="text-xl  font-semibold">MetaLogic</a>
    </div>
    <button  onClick={showMenu} className="md:hidden rounded-md hover:bg-slate-200  px-2 py-1 transition-all ease-in-out duration-300">
        {isOpen ?<X />:<Menu />}
    </button>
    <div className=" hidden  w-1/2  md:flex justify-center">
        <ul className="flex   gap-16   px-2 ">
            <li className="    px-4 py-1 font-semibold hover:bg-blue-500 hover:bg-opacity-30 rounded-md duration-300 transition-colors">
                <a href="#">Home</a>
            </li>
            <li className="realtive">
               <button onClick={subdrop}
                className=" flex gap-1 rounded-md px-2 py-1 hover:bg-blue-500 hover:bg-opacity-30 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform  ">
                 <p className="font-semibold"> Services</p>
                {dropmenu ? <ChevronUp/>:<ChevronDown />}
               </button>
               {dropmenu && (
                <div className="flex  bg-subnava text-white px-6 border-b-1  py-1  left-0 absolute z-20 top-[56px] w-full ">
                    <div className=" w-full grid gap-2 p-2  md:grid-cols-3">
                        {companyDropdownItems.map((item,index)=>(
                    <a key={index} href={item.heref} className="group relative overflow-hidden" >
                     <div className=" rounded-md px-3 py-2 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex flex-col items-start ">
                  <span className="font-medium">{item.label}</span>
                  <p>{item.description}</p>
                </div>
                </div>
                    </a>
                ))}
                    </div>
                </div>
               )}
            </li>
            <li className=" px-4 py-1 font-semibold hover:bg-blue-500 hover:bg-opacity-30 rounded-md duration-300 transition-colors">
                <a href="#">Career</a>
            </li>
            <li className=" px-4 py-1 font-semibold hover:bg-blue-500 hover:bg-opacity-30  rounded-md duration-300 transition-colors">
                <a href="#">Blogs</a>
            </li>
            <li className=" px-4 py-1 font-semibold hover:bg-blue-500 hover:bg-opacity-30 rounded-md duration-300 transition-colors">
                <a href="#">About Us</a>
            </li>
        </ul>
    </div>
    <div className="hidden md:block">
      <button className="rounded-lg px-2 py-2 font-semibold  transition-all duration-300 ease-in-out  bg-red-500 text-white  hover:bg-red-400">Get in Touch</button>
    </div>
    {isOpen && (
        <div className={`md:hidden fixed  font-semibold text-black bg-slate-100 left-0 top-10 items-center justify-center w-full md:w-64 px-2  flex py-1  h-full  ${menubar ?"":""}`}>
         <ul className="flex items-center justify-center  flex-col gap-10  px-2 ">
            <li className=" ">
                <a href="#" className="hover:border-b-2 transition-all ease-in-out border-red-500 hover:translate-x-0 duration-400 ">Home</a>
            </li>
              <li className="">
               <button  
                onClick={subdrop}
                className=" flex gap-1 rounded-md   transition-all duration-300 ease-in-out transform  ">
                <p> Services</p>
                {dropmenu ? <ChevronUp/>:<ChevronDown />}
               </button>
         {dropmenu && (
      <div className="flex px-2   border-l-1.5 mt-2">
      <div className="flex flex-col gap-2">
      {companyDropdownItems.slice(0,4).map((item, index) => (
        <a key={index} href={item.heref} className="group relative overflow-hidden" >
          <div className=" rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex  flex-col items-start justify-between">
              <span className="text-sm text-gray-800">{item.label}</span>
              <span className="text-[12px] text-gray-600">{item.description}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></div>
        </a>
      ))}
    </div>
  </div>
)}
         </li>
            <li>
              <a href="#" className="hover:border-b-2 transition-all ease-in-out border-red-500 hover:translate-x-0 duration-400">Career</a>
            </li>
            <li>
              <a href="#" className="hover:border-b-2 transition-all ease-in-out border-red-500 hover:translate-x-0 duration-400">Blogs</a>
            </li>
            <li>
                <a href="#" className="hover:border-b-2 transition-all ease-in-out border-red-500 hover:translate-x-0 duration-400">About Us</a>
            </li>
        </ul>
        </div>
    )}
 </div>
  );
}
