/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/
function mostrar(){
    var precio, porcentaje, precioFinal;
    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    porcentaje = prompt("Ingrese el porcentaje de descuento");
    porcentaje = parseInt(porcentaje);
    precioFinal = precio - (porcentaje/100 * precio)
    document.getElementById("elPrecioFinal").value = precioFinal;
}
