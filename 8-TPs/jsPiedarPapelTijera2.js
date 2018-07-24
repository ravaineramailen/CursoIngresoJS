var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;


function comenzar(){
	eleccionMaquina = parseInt(Math.random() * 3) + 1;
	console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra(){
	if(eleccionMaquina == 1){
		alert("empató");
		ContadorDeEmpates = ContadorDeEmpates +1;
	} else if( eleccionMaquina == 2){
		alert("perdio");
		ContadorDePerdidas = ContadorDePerdidas +1;
	} else{
		alert("gano");
		ContadorDeGanadas = ContadorDeGanadas +1;
	}
}//FIN DE LA FUNCIÓN
function papel(){
	if(eleccionMaquina == 1){
		alert("gano");
		ContadorDeGanadas = ContadorDeGanadas +1;
	} else if( eleccionMaquina == 2){
		alert("empato");
		ContadorDeEmpates = ContadorDeEmpates +1;
	} else{
		alert("perdio");
		ContadorDePerdidas = ContadorDePerdidas +1;
	}
}//FIN DE LA FUNCIÓN
function tijera(){
	if(eleccionMaquina == 1){
		alert("perdio");
		ContadorDePerdidas = ContadorDePerdidas +1;
	} else if( eleccionMaquina == 2){
		alert("gano");
		ContadorDeGanadas = ContadorDeGanadas +1;
	} else{
		alert("empato");
		ContadorDeEmpates = ContadorDeEmpates +1;
	}
}//FIN DE LA FUNCIÓN

function mostrarResultado(){
	document.getElementById("ganadas").value = ContadorDeGanadas + "partidas ganadas";

	document.getElementById("perdidas").value = ContadorDePerdidas + "partidas perdidas";

	document.getElementById("empatadas").value = ContadorDeEmpates + "partidas empatadas";
}
