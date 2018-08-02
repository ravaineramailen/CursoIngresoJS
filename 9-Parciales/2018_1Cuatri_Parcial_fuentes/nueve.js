function mostrar(){
    var marca, peso, temp;
    var respuesta = "si";
    var contador= 0;
    var cantTempPar = 0;
    var marcaPesado;
    var cantMenorTemp = 0;
    var promPeso;
    var acumPeso = 0;
    var pesoMax = -30;
    var pesoMin = 30; 

    while (respuesta == "si"){
         marca = prompt("Ingrese la marca del producto");

        peso = prompt("Ingrese el peso del producto");
        peso = parseInt(peso);
        acumPeso = acumPeso + peso;
        while (peso < 1 ||  peso > 100 || isNaN(peso)){
            peso = prompt("ERROR. Ingrese nuevamente el peso del producto");
            peso = parseInt(peso);
        }
        

        temp = prompt("Ingrese la temperatura del producto");
        temp = parseInt(temp);
        while (temp < -30 || temp > 30 || isNaN(temp)){
            temp = prompt("ERROR. Ingrese nuevamente la temperatura del producto");
            temp = parseInt(temp);
        }
        respuesta = prompt("¿Desea seguir?");
        contador++;
     
        if (temp%2==0){
            cantTempPar++;//a) La cantidad de temperaturas pares. 
        }

        if(temp < 0){
            cantMenorTemp++;//c) La cantidad de productos que se conservan a menos de 0 grados. 
        }
            
        //f) El peso máximo y el mínimo.
        if(peso > pesoMax){
            pesoMax = peso;
            marcaPesado = marca; //b) La marca del producto más pesado.
        }
        if(peso < pesoMin){
            pesoMin = peso;
        }
    }

    
    promPeso = acumPeso/contador; //d) El promedio del peso de todos los productos.
    promPeso = parseInt(promPeso);

    document.write("a) La cantidad de temperaturas pares es: " + cantTempPar + "<br>");
    document.write("b) La marca del producto más pesado es: " + marcaPesado + "<br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados son: " + cantMenorTemp + "<br>");
    document.write("d) El promedio del peso de todos los productos es: " + promPeso + "<br>");
    document.write("f) El peso máximo es: " + pesoMax + " y el peso minimo es: " + pesoMin + "<br>");
}
