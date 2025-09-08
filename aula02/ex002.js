/*Você recebeu a lista de temperaturas registradas durante um dia, de hora em hora. Seu
objetivo é classificar cada temperatura como:
• "Frio" se for menor que 20°C
• "Agradável" se estiver entre 20°C e 29°C
• "Quente" se for 30°C ou mais

Instruções:
1. Crie um array chamado temperaturas com 12 valores numéricos representando
as temperaturas do dia.

2. Crie três arrays vazios:
- frios
- agradaveis
- quentes
3. Use um laço for para percorrer cada item do array temperaturas.

4. Use if / else if / else para verificar a temperatura e adicionar no array
correspondente.

5. No final, exiba todos os arrays no console.*/

let temperatura = [10, 15, 18, 19, 20, 21, 22, 25, 27, 28, 30, 32];
let frio = [];
let agradavel = [];
let quente = [];

    for(let i = 0; i < temperatura.length; i++ ) {

        let temp = temperatura[i];

        if(i < 20){
            frio.push(temp);
            console.log('O clima está frio!', frio);
        }else if(i >= 20 && i <= 29){
            agradavel.push(temp);
            console.log('O clima está agradável!', agradavel);
        }else{
            quente.push(temp);
            console.log('O clima está quente', quente);
        }
    }

