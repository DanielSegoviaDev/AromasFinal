import React from 'react';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import Nosotros from './componentes/Nosotros';


function About(){
    return(
        <div>
            <NavBar />
            <Nosotros />
            <Footer />
        </div>
    )
}

export default About;