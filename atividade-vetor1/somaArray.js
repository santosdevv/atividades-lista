let numeros = []
let soma = 0
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}: `))
    numeros[i] = numero
    soma = soma + numero
}
document.write(`O somatório dos números é: ${soma}<br>`)
document.write(`Os números digitados foram: <br>`)
for (let i = 0; i < 5; i++) {
    document.write(`${numeros[i]}<br>`)
}
