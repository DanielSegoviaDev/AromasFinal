import React from 'react';
import X from '../imagenes/x.png';



function InfoProductos(){
    return(
        <div>
           <div className="overlay-popup" id="overlay-popup">
               <div className="popup" id="popup">
                   <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup"><img src={X} alt="x"/></a>
                   <h2>Esencias de Hornito</h2>
                    <p>Cupidatat dolore dolor consectetur ad tempor quis do. Consectetur dolore laborum culpa anim adipisicing qui anim.
                       Nostrud ipsum commodo tempor mollit labore voluptate ipsum sit exercitation ea eu ullamco. Ullamco eiusmod reprehenderit amet cillum amet laboris et exercitation sit magna. Enim cupidatat sit in irure commodo voluptate.Occaecat nostrud nulla labore aute et. Incididunt exercitation proident culpa do.
                    </p>
                    <h3>Aromas</h3>
                    
                    <div className="tabla">
                       <table>
                        <tr>
                            <td>Aroma</td>
                            <td>Aroma</td>
                            <td>Aroma</td>
                            <td>Aroma</td>
                        </tr>
                        <tr>
                            <td>Aroma</td>
                            <td>Aroma</td>
                            <td>Aroma</td>
                            <td>Aroma</td>
                        </tr>
                       </table>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default InfoProductos;