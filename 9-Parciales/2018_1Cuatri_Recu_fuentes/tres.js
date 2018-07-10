function mostrar(){
    var precio , porcentaje, descuento, preciocondesc, iva, preciofinal;
    precio= prompt("Ingrese el precio");
    porcentaje= prompt("Ingrese el porcentaje de descuento");
    precio= parseInt(precio);
    porcentaje= parseInt(porcentaje);
    descuento= porcentaje/100 * precio;
    preciocondesc= precio - descuento;
    iva= 21/100 * precio;
    alert("El descuento en dinero es " + descuento + ". El precio con el descuento es " + preciocondesc + ". El iva es de " + iva)
    preciofinal= preciocondesc + iva;
    document.getElementById("elPrecioFinal").value = preciofinal
}
