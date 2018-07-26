function mostrar()
{
	var contador=0;
	var suma=0;
	var respuesta='si';
	var numero;
	while(respuesta == "si")
	{
		contador++;
		numero = prompt("Ingrese un numero");
		numero= parseInt(numero);
		respuesta = prompt("¿Desea seguir?");
		suma = suma + numero;
	}
	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN