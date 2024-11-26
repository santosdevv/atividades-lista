let nomeFuncionario = ["", "", ""]
let SalarioFuncionario = []
let tempoServiço = []

for (let i = 0; i < nomeFuncionario.length; i++) {
    nomeFuncionario[i] = prompt(`Digite o nome do funcionario`)
    SalarioFuncionario[i] = Number(prompt(`Digite o salario do funcionario: ${nomeFuncionario[i]}`))
    tempoServiço[i] = Number(prompt(`Digite o tempo de serviço (em anos) do funcionario: ${nomeFuncionario[i]}`))
}

for (let j = 0; j < nomeFuncionario.length; j++) {
    if (SalarioFuncionario[j] < 400 && tempoServiço[j] >= 5) {
        let salarioNovo
        salarioNovo = SalarioFuncionario[j] * 1.35
        document.write(`Funcionario a receber aumento é ${nomeFuncionario[j]} com o novo salario de ${salarioNovo}<br>`)
    } else if (tempoServiço[j] >= 5) {
        let salarioNovo
        salarioNovo = SalarioFuncionario[j] * 1.25
        document.write(`Funcionario a receber aumento é ${nomeFuncionario[j]} com o novo salario de ${salarioNovo}<br>`)
    } else if (SalarioFuncionario[j] < 400) {
        let salarioNovo
        salarioNovo = SalarioFuncionario[j] * 1.25
        document.write(`Funcionario a receber aumento é ${nomeFuncionario[j]} com o novo salario de ${salarioNovo}<br>`)
    }

}