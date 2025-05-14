import Screen from "./Section/Screen"
import Navbara from "./Components/Navbar"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import Card from "./Components/Card"
import Second from "./Components/second"
import CardFlip from "./Components/Cardflip"
const App=()=>{
  return(
   <Screen>
    <Navbara />
     <Hero />
     <Card />
     <Second />
     <CardFlip />
    <Footer/>
   </Screen>
   
  )
}
export default App