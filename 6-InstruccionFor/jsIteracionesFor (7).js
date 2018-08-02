/*al presionar el botón pedir un número. mostrar los numeros divisores desde el 
1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar(){
    var num;
    var cantDiv = 0;
    num = prompt("Ingrese un numero");
    num = parseInt(num);

    for(i=0; i<=num; i++){
        if(num%i==0){
            cantDiv++;
            console.log(i);
        }
    }
}//FIN DE LA FUNCIÓN