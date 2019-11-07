import React from 'react';
import NavBar from './componentes/NavBar';
import Noticias from './componentes/Noticias';
import Footer from './componentes/Footer';
import Nosotros from './componentes/Nosotros';


function About(){
    return(
        <div>
            <NavBar />
            <Noticias />
            <Nosotros />
            <Footer />
        </div>
    )
}

export default About;