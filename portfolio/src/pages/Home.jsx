import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"


const Home = () => {

    const alumno={nombre:"joaquin", apellido:"gil", edad:23}

  return (
   <>
       <Header/> 
       <Main alumno={alumno}/>
       <Footer/>     
   </>
  )
}

export default Home