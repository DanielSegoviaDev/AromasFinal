import React from 'react';
import Facebook from '../imagenes/Facebook.png';
import Instagram from '../imagenes/Instagram.png';

function Footer(){
    return(
   
            <footer>
                <div className="flex-container">

                <a href="https://www.facebook.com/aromasdelarcoiris1/" target="_blank" rel="noopener noreferrer" id="redes-icon-f">
                <img src={Facebook}  alt="facebook icon" />
                </a>
                <p>Aromas del ArcoIris, Copyright &copy; 2019</p>
                <a href="https://www.instagram.com/aromasdelarcoiris/?hl=es-la" target="_blank" rel="noopener noreferrer" id="redes-icon-i" >
                <img src={Instagram}  alt="instagram icon"></img>
                </a>

                </div>
            </footer>
   
    )
}

export default Footer;