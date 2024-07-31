/**Ejercicio 10: Validación de Email
Enunciado: Escribe un programa que valide si una dirección de correo electrónico ingresada por el usuario es válida. El programa debe 
solicitar al usuario una dirección de correo electrónico y mostrar un mensaje indicando si es válida o no. */


correo=''

correo=prompt("ingrese correo a guardar")



validar=prompt("ingrese correo guardado: ")

if(validar===correo){
alert("tu correo es valido: "+correo)
}else{
    alert("correo es invalido")
}
