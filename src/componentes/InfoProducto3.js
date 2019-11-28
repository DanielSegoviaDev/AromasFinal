import React from 'react';
import X from '../imagenes/x.png';




function InfoProducto3(props)
{
    let cerrar = ()=>{ 
        props.ocultar3();}
   
    
    if (props.visible)
    {
        return(
            <div>
            <div className="overlay-popup active" id="overlay-popup" >
                <div className="popup active" id="popup">
                    <a href="/Services" id="btn-cerrar-popup" className="btn-cerrar-popup"><img src={X} alt="x" onClick={cerrar}/></a>
                    <h2>Difusores</h2>
                        <p>Cupidatat dolore dolor consectetur ad tempor quis do. Consectetur dolore laborum culpa anim adipisicing qui anim.
                        Nostrud ipsum commodo tempor mollit labore voluptate ipsum sit exercitation ea eu ullamco. Ullamco eiusmod reprehenderit amet cillum amet laboris et exercitation sit magna. Enim cupidatat sit in irure commodo voluptate.Occaecat nostrud nulla labore aute et. Incididunt exercitation proident culpa do.
                        </p>
                        <h3>Aromas</h3>
                        
                        <div className="tabla ">
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
        );
        }
        else
        {
            return(
            <div>
            <div className="overlay-popup" id="overlay-popup" >
                <div className="popup " id="popup">
                    <a href="/#NOW" id="btn-cerrar-popup" className="btn-cerrar-popup"><img src={X} alt="x"/></a>
                    <h2>Difusores</h2>
                        <p>Cupidatat dolore dolor consectetur ad tempor quis do. Consectetur dolore laborum culpa anim adipisicing qui anim.
                        Nostrud ipsum commodo tempor mollit labore voluptate ipsum sit exercitation ea eu ullamco. Ullamco eiusmod reprehenderit amet cillum amet laboris et exercitation sit magna. Enim cupidatat sit in irure commodo voluptate.Occaecat nostrud nulla labore aute et. Incididunt exercitation proident culpa do.
                        </p>
                        <h3>Aromas</h3>
                        
                        <div className="tabla ">
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
}

export default InfoProducto3;