/*1. Crie um array, com pelo menos 10 elementos.
Use o tema:
o Filmes*/

let filmes = ['Terror', 'Comédia', 'Romance', 'Ficção', 'Suspense', 'Gore'];

/*2. Para o array criado, faça as seguintes operações:
a) Exiba o primeiro e o último elemento.
b) Substitua o terceiro elemento por um novo valor.
c) Adicione um novo elemento ao final com .push()
d) Remova o primeiro elemento com .shift()
e) Exiba o array atualizado no final de cada etapa.*/

/*3. Escreva todos os console.log necessários para mostrar as mudanças.*/
console.log('Primeiro filme: ',filmes[0]);
console.log('Último filme: ', filmes[5]);
console.log(filmes);

filmes[2] = 'Marley e eu';
console.log(filmes);

filmes.push('Criminal');
console.log(filmes);

filmes.shift();
console.log(filmes);



