/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primerNumero, segundoNumero, operador, resultado, respuesta;
function comenzar(){
    primerNumero = parseInt(Math.random()* 10) + 1;
    segundoNumero = parseInt(Math.random()* 10) + 1;
    operador = parseInt(Math.random() * 4) + 1;
    document.getElementById("PrimerNumero").value = primerNumero;
    document.getElementById("SegundoNumero").value = segundoNumero;
    switch(operador)
	{
		case 1:
		document.getElementById('Operador').value = "+";
		resultado = primerNumero + segundoNumero;
		break;
		case 2:
		document.getElementById('Operador').value = "-";
		resultado = primerNumero - segundoNumero;
		break;
		case 3:
		document.getElementById('Operador').value = "*";
		resultado = primerNumero * segundoNumero;
		break;
		case 4:
		document.getElementById('Operador').value = "/";
		resultado = primerNumero / segundoNumero;
        break;   
	}
}//FIN DE LA FUNCIÓN
function Responder(){
    respuesta = document.getElementById("Respuesta").value 
    if (respuesta == resultado){
        alert("El resultado es correcto");
    } else{
        alert("El resultado es incorrecto");
    }
	

}//FIN DE LA FUNCIÓN
