function mostrar(){
    var edad,estadocivil;
    edad = document.getElementById("edad").value
    estadocivil = document.getElementById("estadoCivil").value
    if( edad > 17 && estadocivil == "Soltero"){
        alert("Es soltero y no es menor")
    }
}//FIN DE LA FUNCIÓN