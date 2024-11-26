let numeros = []
let positivos = []
let negativos = []


for (let i = 0; i < 8; i++) {
    numeros[i] = parseInt(prompt(`Digite o número inteiro ${i + 1}:`))

    if (numeros[i] >= 0) {
        positivos[positivos.length] = numeros[i] 
    } else {
        negativos[negativos.length] = numeros[i] 
    }
}


document.write("Números positivos:")
for (let i = 0; i < positivos.length; i++) {
    document.write(`${positivos[i]}<br>`)
}

document.write("Números negativos:")
for (let i = 0; i < negativos.length; i++) {
    document.write(`${negativos[i]}<br>`)
}
