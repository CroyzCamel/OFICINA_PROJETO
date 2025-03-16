let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const campoPalpite = document.getElementById("guessInput");
const botaoPalpite = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const displayTentativas = document.getElementById("attempts");
const botaoReiniciar = document.getElementById("restartButton");

function verificarPalpite() {
    const palpiteUsuario = parseInt(campoPalpite.value);

    if (isNaN(palpiteUsuario)) {
        feedback.textContent = "Por favor, insira um número válido!";
        return;
    }

    tentativas++;
    displayTentativas.textContent = `Tentativas: ${tentativas}`;

    if (palpiteUsuario === numeroSecreto) {
        feedback.textContent = `Acertou! O número secreto era ${numeroSecreto}.`;
        botaoPalpite.disabled = true;
        botaoReiniciar.style.display = "block";
    } else if (palpiteUsuario < numeroSecreto) {
        feedback.textContent = "Muito baixo! Tente novamente.";
    } else {
        feedback.textContent = "Muito alto! Tente novamente.";
    }

    campoPalpite.value = "";
}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    displayTentativas.textContent = "Tentativas: 0";
    feedback.textContent = "";
    botaoPalpite.disabled = false;
    botaoReiniciar.style.display = "none";
}

botaoPalpite.addEventListener("click", verificarPalpite);
botaoReiniciar.addEventListener("click", reiniciarJogo);

campoPalpite.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        verificarPalpite();
    }
});