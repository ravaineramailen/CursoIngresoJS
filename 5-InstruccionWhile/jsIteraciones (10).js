 
function mostrar()
{
	var contador=0; 
	var respuesta="si";
	var numero;
	var sumaneg= 0;
	var sumapos= 0;
	var cantpos= 0;
	var cantneg= 0;
	var cantcero= 0;
	var cantpar= 0;
	var prompos , promneg, msj, diferencia;
	while(respuesta!="no")
	{
		contador++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("ingrese numero")
			numero=parseInt(numero);
		}
		if(numero>0){
			sumapos = sumapos + numero;//2-Suma de los positivos. 
			cantpos++;//3-Cantidad de positivos. 
		} else if (numero<0){
			sumaneg = sumaneg + numero;//1-Suma de los negativos. 
			cantneg++;//4-Cantidad de negativos. 
		} else if (numero == 0){
			cantcero++;//5-Cantidad de ceros. 
		} else if(numero%2==0){
			cantpar++;//6-Cantidad de números pares. 
		} 
		prompos = sumapos / cantpos;//7-Promedio de positivos. 
		promneg = sumaneg / cantneg;//8-Promedios de negativos.
		diferencia = cantpos - cantneg;
		if(diferencia>0){
			msj="Hay mas numeros positivos: " + diferencia;
		} else if(diferencia == 0){
			msj= "Hay la misma cantidad."
		}else{
			msj="Hay mas numeros negativos: " + (diferencia*-1)

		} //9-Diferencia entre positivos y negativos, 
		respuesta = prompt("¿Desea seguir?");
	}
	document.write("1-Suma de los negativos: " + sumaneg + "<br>");
	document.write("2-Suma de los positivos: " + sumapos + "<br>");
	document.write("3-Cantidad de positivos: " + cantpos + "<br>");
	document.write("4-Cantidad de negativos: " + cantneg + "<br>");
	document.write("5-Cantidad de ceros: " + cantcero + "<br>");
	document.write("6-Cantidad de números pares: " + cantpar + "<br>");
	document.write("7-Promedio de positivos: " + prompos + "<br>");
	document.write("8-Promedios de negativos: " + promneg + "<br>");
	document.write("9-" + msj);

}//FIN DE LA FUNCIÓN
