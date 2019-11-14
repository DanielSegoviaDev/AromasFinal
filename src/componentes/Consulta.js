import React from 'react';


function Validar ()
    {
        
        let nombre, mail, consulta, expression, expressionA;
        nombre = document.getElementById("nombre").value;
        mail = document.getElementById("email").value;
        consulta = document.getElementById("consulta").value;
        expression = /\w+@\w+\.+[a-z]/;  
        expressionA = /\w+@\w+\.+[a-z]\.+[a-z]/;


        if(nombre === "" || mail === "" || consulta === ""){
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if(nombre.length>30){
            alert("El nombre es muy largo");
            return false;
        }
        else if(mail.length>100){
            alert("El EMail ingresado es muy largo");
            return false;
        }
        else if(!expression.test(mail) || !expressionA.test(mail)){
            alert("El correo no es valido");
            return false;
        }
        else if(consulta.length>350){
            alert("La consulta ingresada es muy larga, ingrese menos de 350 caracteres");
            return false;
        }


            

    } 

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
                                <span class="error" aria-live="polite"></span>
                            </div>
                                <div>
                                <label>Mensaje</label>
                                <textarea placeholder="Consulta..." name="consulta" id="consulta"></textarea>
                            </div>
                            <button class="button_1" type="submit" id="btn" onClick={Validar}> Enviar! </button>
                    </form>
                 </div>
             </aside>
    )
}


export default Consulta;