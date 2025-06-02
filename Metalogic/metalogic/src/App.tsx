import Header from "./Components/Header"
import Hero from "./Components/Hero"
// import { useEffect } from "react"

// useEffect(()=>{

// },[])
const App=()=>{
  return(
   <main className=" text-white  bg-gradient-to-br from-primarycolor-900  via-primarycolor-700 to-primarycolor-400 
   min-h-screen overfollow-hidden">
    <div className="sm:px-6 sm:py-5 px-1 py-4 ">
    <Header />
    </div>
    <Hero />
   </main>
  )
}
export default App