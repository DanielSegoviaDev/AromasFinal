import React from 'react';

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
            
            <aside id="sidebar">
                 <div class="dark">
                        <h3>Get a Quote</h3>
                    <form class="quote">
                            <div>
                                <label>Name</label>
                                <input type="text" placeholder="Name" />
                            </div>
                                <div>
                                <label>Email</label>
                                <input type="text" placeholder="Email Address"/>
                            </div>
                                <div>
                                <label>Message</label>
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <button class="button_1" type="submit">Send</button>
                    </form>
                 </div>
             </aside>

            </div>
        </section>

    )
}

export default Servicios;