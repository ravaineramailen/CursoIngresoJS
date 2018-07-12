/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var intentos = 0;

function comenzar(){
	numeroSecreto = parseInt(Math.random() * (101 - 1) + 1); //Genero el número RANDOM entre 1 y 100
	console.log(numeroSecreto);
}

function verificar(){
	var numero;
	numero = document.getElementById("numero").value;
	intentos = intentos + 1
	document.getElementById("intentos").value = intentos;
	if (numero == numeroSecreto && intentos == 1){
		alert("Usted es un Psiquico");
	} else if (numero == numeroSecreto && intentos == 2){
		alert("excelente percepción");
		intentos = 0;
	}else if (numero == numeroSecreto && intentos == 3){
		alert("Esto es suerte");
		intentos = 0;
	}else if (numero == numeroSecreto && intentos == 4){
		alert("Excelente técnica");
		intentos = 0;
	}else if (numero == numeroSecreto && intentos == 5){
		alert("Usted está en la medida");
		intentos = 0;
	}else if (numero == numeroSecreto && intentos >= 6 && intentos < 10){
		alert("Falta técnica");
		intentos = 0;		
	} else if (numero == numeroSecreto && intentos >= 10){
		alert("Afortunado en el amor");
		intentos = 0;
	}
} 