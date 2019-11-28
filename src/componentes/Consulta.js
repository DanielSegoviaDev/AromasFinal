import React from 'react';
import WhatsApp from '../imagenes/whatsapp.png';
import LArrow from '../imagenes/arrow-left.png';
import RArrow from '../imagenes/arrow-right.png';




function Consulta(){

    return(
        <div className="consulta-contenedor">
            <div className="flex-container">
                <div className="whatsapp" >
                    <h2 data-aos="fade-up" data-aos-duration="800">Realiza cualquier consulta por WhatsApp!!</h2>
                    <img className="Larrow" src={LArrow} alt="flecha izquierda" data-aos="fade-right" data-aos-duration="800"/>
                    <a title="Click para chatear" href="https://wa.me/5492254441000" target="_blank" rel="noopener noreferrer"><img src={WhatsApp} alt="whatsapp logo"></img></a>
                    <img className="animated fadeInLeft"  src={RArrow} alt="Flecha derecha" data-aos="fade-left" data-aos-duration="800"/>
                   
                </div>
            </div>
         </div>
    
    )
}


export default Consulta;