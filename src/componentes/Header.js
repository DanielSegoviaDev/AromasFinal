import React from 'react';

function Header(){
    return(
        <div>
        <section id="showCase">
            <div class="container">
                <h1>Afordable Professional Web Design</h1>
                <p>Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam</p>
            </div>
        </section>

        <section id="newsletter">  
            <div class="container">
                <h1>Subscribe to Our Newletter</h1>
                <form>
                    <input type="email" placeholder="Enter Email..." />
                    <button type="submit" class="button_1">Suscribe</button>
                </form>
            </div>
        </section>
    </div>
    )
}

export default Header;