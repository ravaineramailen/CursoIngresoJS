/*Realizar el algoritmo que pida el ancho y el largo 
de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
    var ancho, largo, perimetro;
    ancho = prompt("Ingrese el ancho");
    ancho = parseInt(ancho);
    largo = prompt("Ingrese el largo");
    largo = parseInt(largo);
    perimetro = 2*largo + 2*ancho;
    alert('El perimetro es de ' + perimetro);
}
