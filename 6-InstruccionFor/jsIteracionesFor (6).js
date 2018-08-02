/*al presionar el botón pedir un número. mostrar los numeros pares desde el 
1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/
function mostrar(){
    var num;
    var cantPar = 0;
    num = prompt("Ingrese un numero");
    num = parseInt(num);

    for(i=1; i<=num; i++){
        if(i%2==0){
            cantPar++;
            console.log(cantPar);
         }
    }
}//FIN DE LA FUNCIÓN