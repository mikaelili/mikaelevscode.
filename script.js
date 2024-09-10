const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No futuro, eu me vejo morando:",
        alternativas: [
            {
                texto: "Em uma cidade movimentada.",
                afirmacao: "Você é um tipo de pessoa que gosta de estar rodeado/a de pessoas, nunca sozinho/a. "
            },
            {
                texto: "Em um lugar tranquilo, conectado com a natureza.",
                afirmacao: "Você prefere lugares mais calmos, para focar mais. "
            }
        ]
    },
    {
        enunciado: "Quando penso no meu trabalho do futuro, eu me imagino:",
        alternativas: [
            {
                texto: "Em um escritório próprio com colegas de trabalho.",
                afirmacao: "Gosta de trabalhar em equipe, com seus colegas de trabalho."
            },
            {
                texto: "Talvez em casa ou em algum lugar tranquilo, focado no trabalho individual.",
                afirmacao: "Gosta de estar sozinho/a por focar mais. "
            }
        ]
    },
    {
        enunciado: "Daqui a alguns anos, eu espero estar:",
        alternativas: [
            {
                texto: "Viajando pelo mundo, explorando novas culturas e com minha própria empresa.",
                afirmacao: "Você gosta de conhecer lugares novos, mas sempre estar focado/a na empresa."
            },
            {
                texto: "Morando em um lugar específico, construindo minha própria família e focado/a na minha empresa.",
                afirmacao: "Não gosta de estar sempre passsando de um lugar pro outro, em um lugar só o foco vem mais."
            }
        ]
    },
    {
        enunciado: "No futuro, minha vida social será caracterizada por:",
        alternativas: [
            {
                texto: "Muitos encontros sociais, eventos e reuniãos.",
                afirmacao: "Você é o tipo de pessoa que nunca para em casa, sempre correndo atrás de coisas para a empresa."
            },
            {
                texto: "Momentos mais tranquilos com amigos próximos e familiares, mas sempre atento/a a empresa.",
                afirmacao: "Não gosta de coisas muito aceleradas, sempre uma coisa de cada vez."
            }
        ]
    },
    {
        enunciado: "Quando se trata de estilo de vida, você prefere:",
        alternativas: [
            {
                texto: "Um ritmo de vida acelerado, com muitas atividades e experiências novas.",
                afirmacao: "Você nunca para! Sempre com a empresa para todo lugar."
            },
            {
                texto: "Um ritmo mais tranquilo, com tempo para reflexão e tempo para hobbies e interesses pessoais.",
                afirmacao: "Você é da calmaria, não gosta de coisas muito agitadas e etc. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
