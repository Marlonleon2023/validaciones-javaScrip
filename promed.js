


nota1=parseFloat(prompt("ingresa tu nota 1: "))
nota2=parseFloat(prompt("ingresa tu nota 2: "))
nota3=parseFloat(prompt("ingresa tu nota 3: "))
var total=(nota1+nota2+nota3)/3
let promedio=total

if (total<=3.5) {
    document.write("en recuperacion"+promedio)
} else if(total>=4) {
    document.write("has pasado"+promedio)
}