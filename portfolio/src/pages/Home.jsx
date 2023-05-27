import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"


const Home = () => {

   const alumno={nombre:"nelson", edad:"25", legajo:"55945", numtel:"1234", }

  return (
   <>
       <Header/> 
       <Main alumno={alumno}/>
       <Footer/>     
   </>
  )
}

export default Home

 