/*mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".*/
function mostrar()
{
    var nombre, localidad
    nombre = document.getElementById('nombre').value;
    localidad = document.getElementById('localidad').value;
    alert('Usted es ' + nombre + ' y vive en la localidad de ' + localidad );
}
