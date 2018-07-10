function mostrar(){
    var edad,estadocivil;
    edad = document.getElementById("edad").value
    estadocivil = document.getElementById("estadoCivil").value
    if( edad < 18 && estadocivil != "Soltero"){
        alert("Usted es muy pequeño para no ser soltero")
    } 
}//FIN DE LA FUNCIÓN