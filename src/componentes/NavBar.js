import React from 'react';

function NavBar(){
    return(
        <header>
        <div class="container">
            <div id="branding">
                <h1><span class="highlight">Acme</span> Web Design</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Services">Servicies</a></li>
                    <li><a href="/Contact">Contact US</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default NavBar;