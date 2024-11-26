let modeloVeiculos = ["", "", "", "", ""]
let combustivelNecessario = 0
let menorCombustivel = Infinity
let veiculoEconomico


for (let i = 0; i < 3; i++) {
    modeloVeiculos[i] = prompt(`Qual o modelo do Veiculo? ${i + 1}`)
    let combustivel = Number(prompt(`Digite o consumo medio do veiculo ${modeloVeiculos[i]}`))

    combustivelNecessario = 1000 / combustivel[i]
    if (combustivel < menorCombustivel) {
        menorCombustivel = combustivel
        veiculoEconomico = modeloVeiculos[i]
    }
}

document.write(`o veiculo com o menor consumo de combustivel é: ${veiculoEconomico} com o consumo de: ${menorCombustivel} litros`)