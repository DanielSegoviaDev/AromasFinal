import React from 'react';
import Consulta from './Consulta';

function Servicios(){
    return(
        <section id="main">
            <div class="container">
            <article id="main-col">
                <h1 class="page-title">Services</h1>
                    <ul id="services">
                        <li>
                            <h1>Website Desing</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac elit maximus, commodo</p>
                            <p>Pricing: $1,000 - 1,300</p>
                        </li>    
                        <li>
                            <h1>Website Maintenance</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac elit maximus, commodo</p>
                            <p>Pricing: $300 per month</p>
                        </li>
                        <li>
                            <h1>Website Service</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac elit maximus, commodo</p>
                            <p>Pricing: $200 per month</p>
                        </li>

                    </ul>
            </article>
            
            <Consulta></Consulta>

            </div>
        </section>

    )
}

export default Servicios;