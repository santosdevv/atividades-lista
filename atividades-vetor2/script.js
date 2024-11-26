let numeros = []
let auxilio

alert("a seguir digite 10 numeros")
for (let i = 0; i < 3; i++) {
    numeros[i] = Number(prompt("DIgite um numero!"))
    
}
document.write("vetor original ",numeros + "<br>")
for (let j = 0; j < numeros.length; j++) {
    if(numeros[j]<numeros[j+1] ){

        auxilio = numeros[j]
        numeros[j] = numeros[j+1]
        numeros[j+1] = auxilio
    }
    
}
document.write("vetor ordenado ",numeros)