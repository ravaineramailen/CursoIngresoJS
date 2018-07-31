/*mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".*/
function mostrar(){
    var nombre, localidad;
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;
    alert("usted es " + nombre + " y vive en la localidad de " + localidad);
}
