/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () {
    var cantidad, preciodesc, marca, preciototal, precio
    precio = 35;
    preciototal = precio * cantidad;
    cantidad = document.getElementById("Cantidad").value;
    marca= document.getElementById("Marca").value;
    cantidad = parseInt(cantidad);
    if (cantidad >= 6){
        preciodesc = preciototal - (preciototal * 0,5);
        document.getElementById("precioDescuento").value = preciodesc;
     } else if (cantidad == 5 && marca == "ArgentinaLuz" ){
        preciodesc = preciototal - (preciototal * 0,4);
        document.getElementById("precioDescuento").value = preciodesc;            
     } else if (cantidad == 5){
        preciodesc = preciototal - (preciototal * 0,3);
        document.getElementById("precioDescuento").value = preciodesc;
     } else if (cantidad == 4 && (marca == "FelipeLamparas" || marca == "ArgentinaLuz")){
        preciodesc = preciototal - (preciototal * 0,25);
        document.getElementById("precioDescuento").value = preciodesc;
    }else if (cantidad == 4){
        preciodesc = preciototal - (preciototal * 0,2);
        document.getElementById("precioDescuento").value = preciodesc;
    } else if (cantidad == 3){
        if (marca == "ArgentinaLuz"){
            preciodesc = preciototal - (preciototal * 0,15);
            document.getElementById("precioDescuento").value = preciodesc;
        }
    } else if (cantidad == 3){
        if(marca == "FelipeLamparas")
        preciodesc = preciototal - (preciototal * 0,1);
        document.getElementById("precioDescuento").value = preciodesc;
    } else if(cantidad == 3){
        preciodesc = preciototal - (preciototal * 0,05);
        document.getElementById("precioDescuento").value = preciodesc;
    }
}