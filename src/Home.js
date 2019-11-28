import React from 'react';

import NavBar from './componentes/NavBar';
import Header from './componentes/Header';
import Elements from './componentes/Elements';
import Footer from './componentes/Footer';
import Nosotros from './componentes/Nosotros';
import Servicios from './componentes/Servicios';


function App() {
    return (
      <div>
        <NavBar/>
        <Header/>
        
        <Elements/>
     
        <Nosotros/>
       
        <Servicios/>
        
        <Footer/>
      </div>
    );
  }
  
  export default App;