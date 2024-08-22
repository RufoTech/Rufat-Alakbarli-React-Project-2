
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Header from './components/Header'
import Imageslider from './components/Imageslider'
import Online from './components/Online'
import { useEffect } from 'react';
import AOS from 'aos';

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
    </>
  )
}

export default App
