/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

//contadores = var + contante ej.(cont= cont + 1) ej2. (cont ++) (++ cont) (cont+=1) ; acumuladores = var + var ; banderas = var booleana
var numeroSecreto; 
var contadorIntentos = 0;

function comenzar(){
	  numeroSecreto= parseInt(Math.random() * (101 - 1)) + 1;//Genero el número RANDOM entre 1 y 100
	  console.log(numeroSecreto); //alert(numeroSecreto );
}

function verificar(){
    var numero;
    numero = document.getElementById("numero").value;
    contadorIntentos = contadorIntentos + 1;
    document.getElementById("intentos").value = contadorIntentos
    if (numero == numeroSecreto){
      alert("GANO");
      contadorIntentos = 0;
    } else if (numero > numeroSecreto){
      alert("Se paso, intente denuevo");
    } else{
      alert("Le falto, intente denuevo");
    }
}