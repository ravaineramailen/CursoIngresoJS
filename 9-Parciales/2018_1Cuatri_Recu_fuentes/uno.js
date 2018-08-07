
function mostrar(){
    var base, altura, superficie, perimetro;

    base= prompt("ingrese la base");
    altura= prompt("ingrese la altura");
    base= parseInt(base);
    altura= parseInt(altura);
    superficie= (base * altura)/2;
    perimetro= base * 3;
    alert ("La superficie es de " + superficie + ". El perimetro es de " + perimetro)
}
