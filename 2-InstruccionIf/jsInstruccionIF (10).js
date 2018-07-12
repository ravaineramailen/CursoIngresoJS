function mostrar(){
	var random, msj;
	random = parseInt(Math.random() * (11 - 1)) + 1
	if (random <= 4){
		msj = "Vamos la proxima se puede " + random
	} else {
		if (random <9 && random >4){
			msj = "ABROBO " + random
		} else{
			msj = "EXCELENTE " + random
		}
	}
	alert(msj) //Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN