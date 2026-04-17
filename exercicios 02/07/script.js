// Pede os três valores
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

// Calcula a média
let media = (valor1 + valor2 + valor3) / 3;

// Formata para moeda brasileira
let mediaFormatada = media.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

// Exibe o resultado
alert("Média: " + mediaFormatada);