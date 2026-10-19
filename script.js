const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-Resultado");

const perguntas = [
{
    enunciado : "pergunta 1",
    alternativas : [
        "alternativa 1",
        "alternativa 2"
    ]
},

{
    enunciado : "pergunta 2",
    alternativas : [
        "alternativa 1",
        "alternativa 2"
    ]
},
{
    enunciado : "pergunta 3",
    alternativas : [
        "alternativa 1",
        "alternativa 2"
    ]
},
{
    enunciado : "pergunta 4",
    alternativas : [
        "alternativa 1",
        "alternativa 2"
    ]
},
{
    enunciado : "pergunta 5",
    alternativas : [
        "alternativa 1",
        "alternativa 2"
    ]
}
]
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas [atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
}

motraPergunta();