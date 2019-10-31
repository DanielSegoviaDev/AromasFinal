import React from 'react';
import { Html } from '../imagenes/html5.png';
import { Css } from '../imagenes/css3.png';
import {Pc} from '../imagenes/web.png';

function Elements(){
    return(

        <section id="boxes">
            <div class="container">
                <div class="box">
                    <img src={Html} alt="HTML5 markup"/>
                    <h3>HTML5 Markup</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut pbore et dolore magna aliquyam</p>
                </div>
                <div class="box">
                    <img src={Css} alt="CSS3 markup"/>
                    <h3>CSS3 Styling</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut pbore et dolore magna aliquyam</p>
                </div>
                <div class="box">
                    <img src={Pc} alt="A PC logo"/>
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut pbore et dolore magna aliquyam</p>
                </div>
            </div>
        </section>

    )
}

export default Elements;