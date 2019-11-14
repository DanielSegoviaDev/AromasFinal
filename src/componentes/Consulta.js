import React from 'react';
import Validar from '../scripts/form';

function Consulta(){
        
    return(
        <aside id="sidebar">
                 <div class="dark">
                        <h3>Realiza una Consulta</h3>
                    <form class="quote" name="Consulta">
                            <div>
                                <label>Nombre</label>
                                <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
                            </div>
                                <div>
                                <label>Email</label>
                                <input type="text" name="email" id="email" placeholder="Direccion de Email"/>
                            </div>
                                <div>
                                <label>Message</label>
                                <textarea placeholder="Consulta..." name="consulta" id="consulta"></textarea>
                            </div>
                            <button class="button_1" type="submit" id="btn" onclick={Validar}> Enviar! </button>
                    </form>
                 </div>
             </aside>
    )
}


export default Consulta;