/* ARRAY É UMA LISTA ORGANIZADA, E OTIMIZA O CÓDIGO E O TEMPO:
.lenght- Mostra o tamanho da array
.push- Adiciona elemento no final
.pop- Remove o último elemento
.unshift- adiciona no começo
.shift- Remove o primeiro elemento
.indexOf- Busca a posição do elemento*/

//ARRAY(LISTAS) método colchetes(Ideal):
    // let frutas = ['Maça', 'Uva verde', 'Morango'];
    //     console.log(frutas[1]);

// ARRAY método parênteses(Mais propenso a dar erro):
    // let frutaas = new Array('mexirica', 'laranja', 'manga', 'acerola', 'caju');
    //     console.log(frutaas[2]); //Mostra a variável da posição que pedimos
    //     console.log(typeof(frutas)); //Mostra qual é o tipo

    //     console.log(frutaas.length);
    //     console.log(frutaas.push('carambola'));
    //     console.log(frutaas.pop);
    //     console.log(frutaas.shift);


// Exemplo 1: Declarando e iniciando uma array vazia
let meuArrayVazio = [];
console.log('Exemplo 1 - Array Vazio:', meuArrayVazio);

// Exemplo 2: Uma array com diferentes tipos
let frutas = ['Uva verde', 'Kiwi', 'Morango', 'Carambola'];
console.log('Exemplo 2 - Array de frutas', frutas);

let numeros = [10, 20, 30, 40, 50];
console.log('Exemplo 2 - Array de números', numeros);

let misto = ['Texto', 123, true, null];
console.log('Exemplo 2 - Array misto', misto);

// Exemplo 3: Acessando a array pelo índice
console.log('Exemplo 3 - Segunda fruta: ', frutas[2]);
console.log('Exemplo 3 - Quarto número: ', numeros[3]);
console.log('Exemplo 3 - Primeiro misto: ', misto[0]);

// Exemplo 4: Modificando elementos do Array
frutas[1] = 'Pera';
console.log('Exemplo 4 - Array de frutas modificado: ', frutas);

// Exemplo 5: Obtendo o tamanho de um Array (length)
console.log('Exemplo 5 - Tamanho do Array de frutas: ', frutas.length);

// Exemplo 6: Adicionando elementos ao final de um Array (push)
frutas.push('Laranja');
console.log('Exemplo 6 - Array de frutas adicionando: ', frutas);

// Exemplo 7: Removendo o último elemento de um Array (pop)
let ultimaFruta = frutas.pop();
console.log('Exemplo 7 - Array de frutas removendo o último: ', ultimaFruta);

// Exemplo 8: Adicionar elemento ao início de uma Array (unshift)
frutas.unshift('Abacaxi');
console.log('Exemplo 8 - Array de frutas adicionando: ', frutas);

// Exemplo 9: Remover o primeiro elemento de um Array
let primeiraFruta = frutas.shift();
console.log('Exemplo 9 - Array de frutas removendo o primeiro: ', primeiraFruta);

// Exemplo 10: Iterando sobre um Array com um loop tradicional
console.log('Exemplo 10 - Iterando sobre um Array de números');

    for(let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

// Exemplo 11: Iterando sobre um Array com for...of(mais moderno e simples)
console.log('Exemplo 11 - Iterando sobre um Array de frutas com for...of');
    for(let fruta of frutas) {
        console.log(fruta);
    }
