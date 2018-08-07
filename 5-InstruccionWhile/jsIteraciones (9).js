function mostrar()
{
	var cont=0;// declarar variables
	var num;
	var max;
	var min
	var respuesta='si';
	var bandera=true;
	while(respuesta!='no')
	{
		num = prompt("Ingrese un numero");
		num = parseInt (num);
		if(bandera){
			bandera=false
			max=num;
			min=num;
		}
		else if(num>max){
			max=num;
		}
		else if(num<min){
			min=num;
		}
		respuesta = prompt("¿Desea seguir?")
		cont++;
	}
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
}//FIN DE LA FUNCIÓN

