/**Ejercicio 5: Número Par o Impar
Enunciado: Escribe un programa que determine si un número ingresado por el usuario es par o impar.
El programa debe solicitar al usuario un número y luego mostrar un mensaje indicando si el número 
 es par o impar */

let seguir='si'

while(seguir==='si'){
let determinar=parseFloat(prompt("ingrese numero y para terminar(0): "))
    let par=determinar%2

    if(determinar===0){
        break
    }
    if(determinar%2===0){
    alert("es un numero par"+determinar)

    }else{
        alert('es un numero inpar')
    }
   
}