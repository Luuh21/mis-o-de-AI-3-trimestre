const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-Resultado");

const perguntas = [
{
    enunciado : "📚 Qual matéria você prefere?",
    alternativas : [
        "🧮 A) Matemática",
        "📝 B) Português"
    ]
},

{
    enunciado : "🥤 Qual bebida você prefere?",
    alternativas : [
        "🧃 A) Suco",
        "🥤 B) Refrigerante"
    ]
},
{
    enunciado : "⚽ Qual esporte você gosta mais?",
    alternativas : [
        "⚽ A) Futebol",
        "🏐 B) Vôlei"
    ]
},
{
    enunciado : " 🌴 Onde você prefere viajar?",
    alternativas : [
        "🏖️ A) Praia",
        "🌳 B) Campo"
    ]
},
{
    enunciado : " 🌞 Qual período do dia você prefere?",
    alternativas : [
        "☀️ A) Dia",
        "🌙 B) Noite"
    ]
}
];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();