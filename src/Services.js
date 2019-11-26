import React from 'react';
import NavBar from './componentes/NavBar';

import Footer from './componentes/Footer';
import Servicios from './componentes/Servicios';
import InfoProductos from './componentes/InfoProductos';

function Services() {
  return (
    <div>
      <NavBar/>
   
      <Servicios/>
      <InfoProductos/>
      <Footer/>
    </div>
  );
}

export default Services;

