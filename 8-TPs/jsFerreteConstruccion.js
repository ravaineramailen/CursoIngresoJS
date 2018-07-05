/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {
    var largo,ancho,resultado;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    resultado = (largo*2 + ancho*2)*3
    alert("La cantidad de alambre a comprar es " + resultado)

}
function Circulo () {
    var radio, resultado,resultado;
    radio = document.getElementById("Radio").value;
    radio = parseInt (radio);
    resultado =  Math.PI * radio;
    alert("La cantidad de alambre a comprar es " + resultado);

}
function Materiales () {
    var largo,ancho,cemento,cal, superficie;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    superficie = largo * ancho;
    cemento = superficie * 2;
    cal = superficie * 3;
    alert("La cantidad de bolsas de cemento que se deben comprar son " + cemento + " y " + cal + " bolsas de cal")


	
}