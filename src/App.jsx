import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/header'
import Hero from './components/hero'
import Form from "./components/form"
import Service from "./components/service"
import About from "./components/aboutUs"
import Footer from "./components/footer"
import ServicePoster from "./components/servicePoster"
import './App.css'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'




function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Header/>
     <Hero/>
     <Form/>
     <Service/>
     <About/>
     <ServicePoster/>
     <Footer/>
    </>
  )
  
}

export default App;
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

