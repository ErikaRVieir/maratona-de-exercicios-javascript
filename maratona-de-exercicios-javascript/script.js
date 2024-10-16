
/*Variáveis e Operações Matemáticas */

/*1-Crie um programa que peça ao usuário um valor em graus Celsius e converta para Fahrenheit. */

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C é igual a ${fahrenheit}°F`);

/* Esta função converte Celsius para Fahrenheit usando a fórmula (Celsius * 9/5) + 32. Solicitamos ao usuário um valor em Celsius, convertemos e exibimos o resultado no console*/

/*2-Solicite ao usuário a base e a altura de um triângulo e calcule sua área. */
let base = parseFloat(prompt("Digite a base do triângulo: "));
let altura = parseFloat(prompt("Digite a altura do triângulo: "));
let area = (base * altura) / 2;
console.log(`A área do triângulo é ${area}`);
/*  Este código solicita ao usuário a base e a altura de um triângulo, calcula a área usando (base * altura) / 2 e exibe o resultado no console.*/

/*3-Peça ao usuário um número e exiba o seu quadrado e seu cubo. */
let numero = parseFloat(prompt("Digite um número: "));
let quadrado = numero ** 2;
let cubo = numero ** 3;
console.log(`O quadrado de ${numero} é ${quadrado}`);
console.log(`O cubo de ${numero} é ${cubo}`);
/*O código calcula e exibe o quadrado e o cubo de um número fornecido pelo usuário. */

/*4-Solicite dois números ao usuário e exiba a potência do primeiro número elevado ao segundo. */
let base1 = parseFloat(prompt("Digite a base: "));
let expoente = parseFloat(prompt("Digite o expoente: "));
let resultado = base ** expoente;
console.log(`${base1} elevado a ${expoente} é ${resultado}`);
/*Este código lê dois números e exibe o resultado da potência do primeiro número elevado ao segundo.*/

/*Condicionais*/

/*1-Escreva um programa que peça ao usuário um número e informe se ele está entre 1 e 100. */

let numero1 = parseInt(prompt("Digite um número: "));
if (numero1 >= 1 && numero1 <= 100) {
    console.log("O número está entre 1 e 100");
} else {
    console.log("O número não está entre 1 e 100");
}
/*Este código verifica se um número digitado pelo usuário está entre 1 e 100. */

/*2-Implemente uma função que recebe a idade de uma pessoa e retorna uma mensagem informando se ela é criança, adolescente ou adulta. */
function classificarIdade(idade) {
    if (idade < 13) {
        return "criança";
    } else if (idade < 18) {
        return "adolescente";
    } else {
        return "adulto";
    }
}

let idade = parseInt(prompt("Digite a idade: "));
let classificacao = classificarIdade(idade);
console.log(`A pessoa é ${classificacao}`);
/*Uma função classifica a idade de uma pessoa como criança, adolescente ou adulto. */

/*3-Crie um programa que solicite um mês (de 1 a 12) e informe quantos dias esse mês possui. */
function diasDoMes(mes) {
    if (mes === 2) {
        return 28; // Ignorando anos bissextos
    } else if ([4, 6, 9, 11].includes(mes)) {
        return 30;
    } else {
        return 31;
    }
}

let mes = parseInt(prompt("Digite um mês (1-12): "));
let dias = diasDoMes(mes);
console.log(`O mês ${mes} tem ${dias} dias`);
/*Este código informa quantos dias um determinado mês possui. */

/*4-Escreva um programa que peça ao usuário um número e verifique se ele é positivo, negativo ou zero. */
let numero2 = parseFloat(prompt("Digite um número: "));
if (numero2 > 0) {
    console.log("O número é positivo");
} else if (numero2 < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}
/*Este código verifica se o número digitado pelo usuário é positivo, negativo ou zero. */

/* Funções*/
/*1-Crie uma função que aceita dois números e retorna o resultado da divisão do primeiro pelo segundo. Lide com divisões por zero. */
function dividir(a, b) {
    if (b === 0) {
        return 'Divisão por zero não é permitida';
    }
    return a / b;
}

const a = parseFloat(prompt('Digite o primeiro número:'));
const b = parseFloat(prompt('Digite o segundo número:'));
const resultado03 = dividir(a, b);
console.log(`O resultado da divisão é: ${resultado03}`);

/* Esta função dividir aceita dois números a e b e retorna o resultado da divisão de a por b. Se b for zero, a função retorna uma mensagem de erro. Usamos parseFloat para garantir que os valores digitados sejam tratados como números de ponto flutuante. */

/*2-Escreva uma função que recebe uma lista de strings e retorna a lista ordenada em ordem alfabética. */
function ordenarLista(lista) {
    return lista.sort();
}

const lista = prompt('Digite uma lista de strings separadas por vírgula:').split(',');
const listaOrdenada = ordenarLista(lista);
console.log('Lista ordenada:', listaOrdenada);
/* A função ordenarLista usa o método sort do array para ordenar uma lista de strings em ordem alfabética. A lista é fornecida pelo usuário como uma string separada por vírgulas e convertida em um array com split.*/


/*3-Escreva uma função que aceita um array de inteiros e retorna o maior número presente.. */
function maiorNumero(array) {
    return Math.max(...array);
}

const array = prompt('Digite uma lista de números separados por espaço:').split(' ').map(Number);
const maior = maiorNumero(array);
console.log('O maior número é:', maior);

/*A função maiorNumero usa o método Math.max para encontrar o maior número em um array. Usamos o operador de espalhamento (...) para passar os elementos do array para Math.max. A lista é fornecida pelo usuário como uma string separada por espaços, convertida em um array com split e cada elemento é convertido em número com map. */

/*4-Implemente uma função que recebe uma string e retorna a mesma string invertida. */
function inverterString(s) {
    return s.split('').reverse().join('');
}

const string = prompt('Digite uma string:');
const stringInvertida = inverterString(string);
console.log('String invertida:', stringInvertida);

/* A função inverterString divide a string em um array de caracteres (split), inverte o array (reverse) e junta os caracteres de volta em uma string (join). */

/* Laços*/

/*1-Escreva um programa que imprima todos os números ímpares de 1 a 100 */
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
/*Este loop for percorre todos os números de 1 a 50 e imprime cada número. Se o número for múltiplo de 5 (i % 5 === 0), uma mensagem adicional é adicionada indicando que o número é um múltiplo de 5. */


/*2-Escreva um programa que imprima todos os números de 1 a 50 e indique quais são múltiplos de 5. */
function somaAteNumero(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
      soma += i;
    }
    return soma;
  }
  
  const numero04= parseInt(prompt("Digite um número:"));
  console.log(`A soma de 1 até ${numero04} é ${somaAteNumero(numero04)}`);
/*A função somaAteNumero recebe um número n e soma todos os números de 1 até n.
Usamos um loop for para iterar de 1 até n, somando cada número à variável soma.
O resultado é então exibido no console. */

/*3-Faça um programa que peça um número ao usuário e calcule a soma de todos os números de 1 até esse número. */
// Função para calcular a soma de 1 até n
function calcularSoma(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

// Pedir um número ao usuário
const numero5 = parseInt(prompt('Digite um número:'));

// Calcular a soma
const resultado5 = calcularSoma(numero5);

// Exibir o resultado
console.log(`A soma de todos os números de 1 até ${numero5} é ${resultado5}`);


/* Manipulação de Objetos*/

/*1-Crie um array de objetos "Produto" e escreva uma função que calcule o valor total em estoque.*/

const produto1s = [
    { nome: 'Produto 1', preco: 10, quantidade: 2 },
    { nome: 'Produto 2', preco: 20, quantidade: 1 },
    { nome: 'Produto 3', preco: 15, quantidade: 5 }
  ];
  
  function calcularValorTotalEstoque(produtos) {
    return produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
  }
  
  console.log(`O valor total em estoque é: R$${calcularValorTotalEstoque(produtos)}`);
  
  /*Temos um array de objetos produtos, cada um representando um produto com nome, preco e quantidade.
A função calcularValorTotalEstoque usa o método reduce para calcular o valor total em estoque, multiplicando o preço pela quantidade de cada produto e somando esses valores. */

/*2-Implemente um método em um objeto "Estudante" que retorna se o estudante está aprovado ou reprovado, com base em suas notas.*/

const estudante = {
    nome: 'Lucas',
    notas: [7, 8, 6, 9],
    aprovado: function() {
      const media = this.notas.reduce((total, nota) => total + nota, 0) / this.notas.length;
      return media >= 7 ? 'Aprovado' : 'Reprovado';
    }
  };
  
  console.log(`${estudante.nome} está ${estudante.aprovado()}`);
/*O objeto estudante possui um método aprovado que calcula a média das notas.
Se a média for maior ou igual a 7, o estudante está aprovado; caso contrário, está reprovado. */

/*3-Crie uma função que, dada uma lista de objetos "Funcionário", calcule a soma dos salários..*/
const funcionarios1 = [
    { nome: 'Funcionário 1', salario: 3000 },
    { nome: 'Funcionário 2', salario: 4000 },
    { nome: 'Funcionário 3', salario: 2500 }
  ];
  
  function calcularSomaSalarios(funcionarios) {
    return funcionarios.reduce((total, funcionario) => total + funcionario.salario, 0);
  }
  
  console.log(`A soma dos salários é: R$${calcularSomaSalarios(funcionarios)}`);

  /*O array funcionarios contém objetos representando funcionários com nome e salario.

A função calcularSomaSalarios usa o método reduce para somar todos os salários. */
  
  /*4-Crie uma lista de objetos "Estudante" e escreva uma função que retorna os estudantes que estão acima da média de notas.

*/
const estudantes = [
    { nome: 'Renata', notas: [8, 9, 7, 6] },
    { nome: 'Flavia', notas: [5, 6, 7, 8] },
    { nome: 'Renato', notas: [9, 8, 10, 9] }
  ];
  
  function estudantesAcimaDaMedia(estudantes) {
    const mediaGeral = estudantes.flatMap(estudante => estudante.notas).reduce((total, nota) => total + nota, 0) / estudantes.flatMap(estudante => estudante.notas).length;
    return estudantes.filter(estudante => {
      const media = estudante.notas.reduce((total, nota) => total + nota, 0) / estudante.notas.length;
      return media > mediaGeral;
    });
  }
  
  console.log('Estudantes acima da média:', estudantesAcimaDaMedia(estudantes));
  

/*Calculamos a média geral das notas de todos os estudantes.

Filtramos os estudantes cuja média das notas individuais seja maior que a média geral.*/

/*Funções com Objetos */

// 1. Função que calcula a média de preços
function calcularMediaPrecos(produtos) {
    let soma = 0;
    produtos.forEach(produto => {
        soma += produto.preco;
    });
    return soma / produtos.length;
}

const produtos = [
    { nome: 'Produto 1', preco: 10 },
    { nome: 'Produto 2', preco: 20 },
    { nome: 'Produto 3', preco: 30 }
];
document.getElementById('resultado1').innerText = 'Média de preços: ' + calcularMediaPrecos(produtos);


// 2. Função que retorna alunos com nota acima de 8
function alunosComNotaAcimaDeOito(alunos) {
    return alunos.filter(aluno => aluno.nota > 8);
}


const alunos = [
    { nome: 'Aluno 1', nota: 9 },
    { nome: 'Aluno 2', nota: 7 },
    { nome: 'Aluno 3', nota: 10 }
];
document.getElementById('resultado2').innerText = 'Alunos com nota acima de 8: ' + alunosComNotaAcimaDeOito(alunos).map(a => a.nome).join(', ');

// 3. Função que retorna o funcionário com o maior salário
function funcionarioComMaiorSalario(funcionarios) {
    return funcionarios.reduce((max, funcionario) => max.salario > funcionario.salario ? max : funcionario);
}

const funcionarios = [
    { nome: 'Funcionario 1', salario: 3000 },
    { nome: 'Funcionario 2', salario: 5000 },
    { nome: 'Funcionario 3', salario: 4000 }
];
document.getElementById('resultado3').innerText = 'Funcionário com maior salário: ' + funcionarioComMaiorSalario(funcionarios).nome;

// 4. Função que retorna pessoas com mais de 30 anos
function pessoasComMaisDeTrintaAnos(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade > 30);
}
const pessoas = [
    { nome: 'Pessoa 1', idade: 25 },
    { nome: 'Pessoa 2', idade: 35 },
    { nome: 'Pessoa 3', idade: 40 }
];
document.getElementById('resultado4').innerText = 'Pessoas com mais de 30 anos: ' + pessoasComMaisDeTrintaAnos(pessoas).map(p => p.nome).join(', ');



  
  