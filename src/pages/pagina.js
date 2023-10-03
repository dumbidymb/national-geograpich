import Navbarf from "../componentes/navbarFirst"
import Navbar from "../componentes/navbar"
import Texto from '../componentes/texto'
import Tarjetas from '../componentes/tarjetas'
import Footer from '../componentes/footer'
import Api from "@/componentes/api"




function pagina() {
  return (
    <div>
      <Navbarf/>
      <Navbar/>
      <Texto/>
      <Tarjetas/>
      <Api/>
      <Footer/>
  
   
      
  

    </div>
   
  )
}

export default pagina