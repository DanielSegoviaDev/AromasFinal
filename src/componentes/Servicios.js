import React from 'react';
import Consulta from './Consulta';
import Galeria from './Galeria';

function Servicios(){
    return(
        <section id="main">
            <div class="container">
            <Galeria/>
            <Consulta></Consulta>

            </div>
        </section>

    )
}

export default Servicios;