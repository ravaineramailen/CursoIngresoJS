/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar(){
	eleccionMaquina = parseInt(Math.random() * 3) + 1;
	console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra(){
	if(eleccionMaquina == 1){
		alert("empató");
	} else if( eleccionMaquina == 2){
		alert("perdio");
	} else if( eleccionMaquina == 3){
		alert("gano");
	}

}//FIN DE LA FUNCIÓN
function papel(){
	if(eleccionMaquina == 1){
		alert("gano");
	} else if( eleccionMaquina == 2){
		alert("empato");
	} else if( eleccionMaquina == 3){
		alert("perdio");
	}

}//FIN DE LA FUNCIÓN
function tijera(){
	if(eleccionMaquina == 1){
		alert("perdio");
	} else if( eleccionMaquina == 2){
		alert("gano");
	} else if( eleccionMaquina == 3){
		alert("empato");
	}

}//FIN DE LA FUNCIÓN