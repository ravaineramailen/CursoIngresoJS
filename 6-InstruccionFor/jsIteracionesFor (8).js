/*8.1 - al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
/*8.2 - pedir un numero, calcular y mostrarla cantidad de primos entre 1 y el numero ingresado*/
function mostrar(){
    var num;
    var cantDiv = 0;
    num = prompt("Ingrese un numero");
    num = parseInt(num);

    for(i=2; i<=num; i++){
        if(num%i==0){
            alert("Es primo");
            break;
        } 
            cantDiv++;
    }
}//FIN DE LA FUNCIÓN