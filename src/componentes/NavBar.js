import React from 'react';

function NavBar(){
    return(
        <header>
        <div class="container">
            <div id="branding">
                <h1><span class="highlight">Aromas</span> del ArcoIris</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/About">Nosotros</a></li>
                    <li><a href="/Services">Productos</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default NavBar;