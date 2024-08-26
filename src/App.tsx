
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Header from './components/Header'
import Imageslider from './components/Imageslider'
import Online from './components/Online'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Award from './components/Award'
import Teacher from './components/Teacher'
import Trailer from './components/Trailer'
import Selling from './components/Selling'
import Card from './components/Card'
import Footer from './components/Footer'


function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <>
       <Header/>
       <Imageslider/>
       <Online/>
       <Award/>
       <Teacher/>
       <Trailer/>
       <Selling/>
       <Card/>
       <Footer/>
    </>
  )
}

export default App
