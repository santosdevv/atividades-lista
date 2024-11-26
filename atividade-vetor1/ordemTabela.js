let vetor1 = [1, 3, 5, 7]
let vetor2 = [2, 4, 6, 8]
let tabelaOrganizada = []

document.write(`vetor 1: ${vetor1} <br>`)

document.write(`vetor 2: ${vetor2} <br>`)


for (let i = 0, j = 0; i < vetor1.length; i++) {
    tabelaOrganizada[j++] = vetor1[i]

    tabelaOrganizada[j++] = vetor2[i]
}
document.write(`tabela Organizada: ${tabelaOrganizada}`)