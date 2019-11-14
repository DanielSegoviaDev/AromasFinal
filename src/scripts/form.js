function Validar(){

    let nombre, mail, consulta;
    nombre = document.getElementById("nombre").value;
    mail = document.getElementById("email").value;
    consulta = document.getElementById("consulta").value;

    
    if(nombre === "" || mail === "" || consulta === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }


} 

export default Validar;
