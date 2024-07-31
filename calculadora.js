/*Ejercicio 3: Calculadora Básica
Enunciado: Escribe un programa que funcione como una calculadora básica. 
El programa debe solicitar al usuario dos números y la operación que desea realizar 
(suma, resta, multiplicación, división). Luego, debe mostrar el resultado de la operación seleccionada.*/



let seguir='si'

while(seguir==='si'){
let operacion=parseInt(prompt("que operacion desas 1.sumar 2.restar 3.dividir 4.salir: "))

    if (operacion===1) {
        number1=parseFloat(prompt("ingresa tu  primer numero: "))
        number2=parseInt(prompt("ingresa tu segundo numero: "))
        let suma=number1+number2
        alert("total suma"+suma)
    } else if(operacion===2) {
        number1=parseFloat(prompt("ingresa tu  primer numero: "))
        number2=parseInt(prompt("ingresa tu segundo numero: "))
        let resta=number1-number2
        alert("total resta"+resta)
    } else if(operacion===3) {
        number1=parseFloat(prompt("ingresa tu  primer numero: "))
        number2=parseInt(prompt("ingresa tu segundo numero: "))
        let dividir=number1/number2
        alert("total division"+dividir)
    }else if(operacion===4){
    seguir ='no'
    }
}