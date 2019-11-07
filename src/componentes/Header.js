import React from 'react';
import Noticias from './Noticias';

function Header(){
    return(
        <div>
        <section id="showCase">
            <div class="container">
                <h1>Mas de 10 Años</h1>
                <p>Entregandote mas que solo aromas</p>
            </div>
        </section>

        <Noticias/>
       
    </div>
    )
}

export default Header;