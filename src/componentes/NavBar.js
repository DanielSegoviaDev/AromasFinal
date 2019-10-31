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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Servicies</a></li>
                    <li><a href="contact.html">Contact US</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default NavBar;