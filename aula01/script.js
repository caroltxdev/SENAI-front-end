// 1. STRING - nome de usuário, mensagens, textos

let usuario = "Ana";
let mensagem = `Seja bem-vinda, ${usuario}!`;

console.log(`1. STRING: ${mensagem} Tipo: ${typeof mensagem}`);

// 2. NUMBER - idade, altura, peso, temperatura

let preco = 19.99;
let quantidade = 3;
let total = preco * quantidade;
console.log(`2. NUMBER: Total da compra = R$ ${total} Tipo: ${typeof total}`);

// 3. BIGINT - números inteiros muito grandes, valores financeiros enormes ou IDs

let idBlockchain = 1234567890123456789012345678901234567890;
console.log(`3. BIGINT (ID Blockchain): ${idBlockchain} Tipo: ${typeof idBlockchain}`); 

// 4. BOOLEAN - verdadeiro ou falso, liga/desliga, sim/não, controle de fluxo

let estaLogado = true;
   if (estaLogado) {
    console.log(`4. BOOLEAN: Usuário está logado`);
   } else {
    console.log(`4. BOOLEAN: Usuário não está logado`);
   }


// 5. UNDEFINED - variável declarada mas não inicializada, valor padrão (ex: cadastro incompleto)

let telefone;
console.log(`5. UNDEFINED: Telefone = ${telefone} Tipo: ${typeof telefone}`);

// 6. SYMBOL - Usado para criar identificadores (ex: chave de objeto)

let chave1 = Symbol("chaveAPI");
let chave2 = Symbol("chaveAPI");
console.log(`6. SYMBOL: São iguais? ${chave1 == chave2}`); // false, símbolos são únicos

// 7. NULL - ausência intencional de valor (ex: campo opcional, valor desconhecido)

let resposta = null;
console.log(`7. NULL: Resposta ainda não foi recebida ${resposta} Tipo: ${typeof resposta}`);  // typeof null é 'object' por um bug histórico

// Exemplo prático combinado
let aluno = {
   nome: 'Lucas', // STRING
   idade: 18, // NUMBER
   matricula: 123456789, // BIGINT
   ativo: true, // BOOLEAN
   telefone: undefined, // UNDEFINED
   token: Symbol('token'), // SYMBOL
   responsavel: null // NULL
};
console.log(`Objeto aluno com diferentes tipos primitivos: ${JSON.stringify(aluno)}`); // JSON.stringify para exibir o objeto como string





