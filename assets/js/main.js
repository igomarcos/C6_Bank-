// // console.log (nome, "chamando a variavel usando o var");

// // var nome = "avanade";


// // existem 7 tipos de erros no javascript

// // SyntaxError - escreveu alguma coisa errado
// // ReferenceError - chamou alguém que não existe
// // // TypeError - erro de tipo é uma violação do javascript
// // EvalError - evite o uso do comando eval, mas se ele for invalido 
// // RangeError - erro de intervalo, loop infinito ou chamadas inumeras de recursividade
// // URIError - erro referente a chamadas externas - uniform resource indentifier.EvalError
// // internalError - erro interno do javascript, falta de memoria, porcessador...
// // tokenização - const nome = valor;


// escreve("Museu do Ipiranga");

// //DENTRO DO JAVASCRIPT EXISTE 4 TIPOS DE FUNÇÕES
// //EXISTE 2 PASSOS PARA TRABLAHR COM FUNÇÕES: CRIA-LAS E CHAMA-LAS.

// //1 - FUNÇÃO NOMINAL
// function escreve(x){
//     console.log(x);
// }

// function mudaTitulo(novoTitulo) {
//     document.querySelector("h1").innerHTML = novoTitulo;
// }

// mudaTitulo ("Go Pats!");


// //2 - EXPRESSÃO DE FUNÇÃO
// const mudaTitulo2 = function(target, novoTitulo){
//     document.querySelector(target).innerHTML = novoTitulo;

// };

// mudaTitulo2("h2", "trocando subtitulo")

// //3 - ARROW FUNCTION - FUNÇÃO DE SETA
// const relogio = () => {
//     const date = new Date();
//     mudaTitulo2("h2", date.toLocaleTimeString());
// };

// setInterval(relogio, 1000);

const frases = ["um banco para 20 milhões de pessoas", "C6 Bank o seu banco!", "Cartão de Crédito sem anuidade"]

//precisa pegar o total de array e usar o setInterval

// "h1" - onde
// frases - Array
// 4 - segundos

const mudaFrase = (target, frases, tempo) => {

    let total = 0;
    setInterval(()=>{
        document.querySelector(target).innerHTML = frases[total >= frases.length - 1 ? (total = 0) : (total += 1)]; 
    }, tempo * 1000);

   }
   
mudaFrase("h1", frases, 4)

