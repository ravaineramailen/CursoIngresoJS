/*(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert.*/
function mostrar(){
    var dia;

    dia = prompt("Ingrese un dia de la semana");

    switch(dia){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("A trabajar!!!");
        break;
        case "sabado":
        case "domingo":
            alert("Buen finde");
        break;
        default:
            alert("ERROR. No es un dia valido");
    }

}
