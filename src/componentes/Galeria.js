import React from 'react';

import Galeria_1 from '../imagenes/galeria/Galeria_1.jpg'; 
import Galeria_2 from '../imagenes/galeria/Galeria_2.jpg'; 
import Galeria_3 from '../imagenes/galeria/Galeria_3.jpg'; 
import Galeria_4 from '../imagenes/galeria/Galeria_4.jpg'; 
import Galeria_5 from '../imagenes/galeria/Galeria_5.jpg'; 
import Galeria_6 from '../imagenes/galeria/Galeria_6.jpg'; 
import InfoProductos from './InfoProductos';



function Mostrar(numero){
let entrada = numero;
   

    if(entrada === 1){
        let overlay = InfoProductos.document.getElementById('overlay-popup'),
            popup = InfoProductos.document.getElementById('popup'),
            btnCerrarPopup = InfoProductos.document.getElementById('btn-cerrar-popup')
        
        overlay.classList.add('active');
        popup.classList.add('active');

        btnCerrarPopup.addEventListener('click', function(){
            overlay.classList.remove('active');
            popup.classList.remove('active');
        });
    }
}

function Galeria(){
    return(
        <div className="galeria">
            <div className="linea"></div>
            <div className="contenedor_imagenes">
                <div className="imagen">
                    <img src={Galeria_1} alt="Producto" className="image" />
                    <div className="overlay" >
                       
                        <h2>Esencias de Hornitos</h2>
                        <button className="btn-abrir-popup" ></button>
                    </div>
                   <InfoProductos/>
                </div>
            
                <div className="imagen">
                    <img src={Galeria_2} alt="Producto" className="image" />
                    <div className="overlay">
                        <h2>Hornitos</h2>
                    </div>
                </div>

                <div className="imagen">
                    <img src={Galeria_3} alt="Producto" className="image" />
                    <div className="overlay">
                        <h2>Sahumerios</h2>
                    </div>
                </div>
            
            
                <div className="imagen">
                    <img src={Galeria_4} alt="Producto" className="image" />
                    <div className="overlay">
                        <h2>Difusores</h2>
                    </div>
                </div>

                <div className="imagen">
                    <img src={Galeria_5} alt="Producto" className="image" />
                    <div className="overlay">
                       <h2>Productos Artesanales</h2>
                    </div>
                </div>

                <div className="imagen">
                    <img src={Galeria_6} alt="Producto" className="image" />
                    <div className="overlay">
                       <h2>Perfumes</h2>
                    </div>
                </div>   

            </div>                                       
        </div>

    )
}

export default Galeria;