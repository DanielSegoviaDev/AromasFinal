import React from 'react';
import  Entrega  from '../imagenes/Entrega.png';
import  Aprobado  from '../imagenes/Aprobado.svg';
import Estrella from '../imagenes/Estrella.svg';

function Elements(){
    return(
       
            <section id="boxes">
                <div className="container">
                    <div class="box" data-aos="zoom-out-right" data-aos-duration="800">
                        <img src={Entrega} alt="Icono de Paquete"/>
                        <h3>Venta al por Mayor y Menor</h3>
                        <p>En toda nuestra linea de productos y aromas propios</p>
                    </div>
                    <div class="box" data-aos="zoom-in" data-aos-duration="800">
                        <img src={Aprobado} alt="Un icono de Aprobado"/>
                        <h3>Multiple Variedad de Productos</h3>
                        <p>Ademas de poseer multiples saumerios, tenemos a tu disposicion una alta variedad de productos</p>
                    </div>
                    <div class="box" data-aos="zoom-out-left" data-aos-duration="800">
                        <img src={Estrella} alt="Un icono de una Estrella"/>
                        <h3>Gran experiencia en el Mercado</h3>
                        <p>Mas de diez años de experiencia en tus gustos y preferencias</p>
                    </div>
                </div>
            </section>
    
    )
}

export default Elements;