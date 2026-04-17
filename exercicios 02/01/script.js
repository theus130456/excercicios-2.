// Pede um valor ao usuário
let valor = prompt("Digite um valor numérico:");

// Converte para número
valor = parseFloat(valor);

// Formata como moeda brasileira
let valorFormatado = valor.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
