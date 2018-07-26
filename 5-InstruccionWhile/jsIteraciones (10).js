 
function mostrar()
{
	var contador=0; 
	var respuesta="si";
	var numero;
	var sumaneg= 1;
	var sumapos= 0;
	var cantpos= 0;
	var cantneg= 0;
	var cantcero= 0;
	var cantpar= 0;
	var prompos , promneg, msj;
	while(respuesta!="no")
	{
		contador++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero) == true )
		{
			numero = prompt("error, ingrese un numero");
		}
		if(numero>0){
			sumapos = sumapos + numero;//2-Suma de los positivos. 
			cantpos++;//3-Cantidad de positivos. 
		} else if (numero<0){
			sumaneg = sumaneg + numero;//1-Suma de los negativos. 
			cantneg++;//4-Cantidad de negativos. 
		} else if (numero == 0){
			cantcero++;//5-Cantidad de ceros. 
		} else if(/*xx*/){
			cantpar++;//6-Cantidad de números pares. 
		} 
		prompos = sumapos / cantpos;//7-Promedio de positivos. 
		promneg = sumaneg / cantneg;//8-Promedios de negativos.
		if (cantneg>cantpos){
			msj= "Hay mas numeros negativos"
		}else if(cantpos>cantneg){
			msj = "Hay mas numeros positivos"
		} else{
			msj= "La cantidad de numeros son iguales"
		}//9-Diferencia entre positivos y negativos.
		respuesta = prompt("¿Desea seguir?");	
	}
	document.write



}//FIN DE LA FUNCIÓN