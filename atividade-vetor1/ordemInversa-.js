
let qntN = parseInt(prompt("Digite a quantidade de números na sequência:"));
let sequencia = [];

for (let i = 0; i < qntN; i++) {
    sequencia[i] = parseInt(prompt("Digite o número " + (i + 1) + ":"));
}
for (let j = qntN - 1; j >= 0; j--) {
    alert(`Sequência invertida: ${sequencia[j]}`);
}
