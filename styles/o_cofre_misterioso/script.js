
const cofres = document.querySelectorAll(".cofre");
const resultado = document.querySelector("#resultado");
const tentativasElemento = document.querySelector("#tentativas");
const vitoriasElemento = document.querySelector("#vitorias");
const botaoJogarNovamente = document.querySelector("#jogarNovamente");
const botaoZerar = document.querySelector("#zerar");

let cofrePremiado;
let tentativas = 0;
let vitorias = 0;
let rodadaFinalizada = false;

// Sorteia um novo cofre premiado e prepara a rodada.
function iniciarRodada() {
    cofrePremiado = Math.floor(Math.random() * 3) + 1;
    rodadaFinalizada = false;

    resultado.textContent =
        "O prêmio está escondido. Faça sua escolha!";

    cofres.forEach(function (cofre) {
        cofre.disabled = false;
        cofre.classList.remove("premiado", "vazio");
    });
}

// Verifica a escolha do jogador.
function escolherCofre(evento) {
    if (rodadaFinalizada) {
        return;
    }

    const cofreEscolhido = Number(
        evento.currentTarget.dataset.cofre
    );

    rodadaFinalizada = true;
    tentativas++;

    // Bloqueia os três cofres após a escolha.
    cofres.forEach(function (cofre) {
        cofre.disabled = true;

        const numero = Number(cofre.dataset.cofre);

        // Revela qual cofre tinha o prêmio.
        if (numero === cofrePremiado) {
            cofre.classList.add("premiado");
            cofre.querySelector(".emoji").textContent = "💰";
        } else {
            cofre.classList.add("vazio");
            cofre.querySelector(".emoji").textContent = "📭";
        }
    });

    // Compara a escolha com o número sorteado.
    if (cofreEscolhido === cofrePremiado) {
        vitorias++;
        resultado.textContent =
            `🎉 Parabéns! Você abriu o cofre ${cofreEscolhido} e encontrou o tesouro!`;
    } else {
        resultado.textContent =
            `😢 Você abriu o cofre ${cofreEscolhido}, mas ele estava vazio! O prêmio estava no cofre ${cofrePremiado}.`;
    }

    atualizarPlacar();
}

// Atualiza os contadores exibidos na página.
function atualizarPlacar() {
    tentativasElemento.textContent = tentativas;
    vitoriasElemento.textContent = vitorias;
}

// Registra um evento de clique para cada cofre.
cofres.forEach(function (cofre) {
    cofre.addEventListener("click", escolherCofre);
});

// Começa uma nova rodada ao clicar no botão.
botaoJogarNovamente.addEventListener("click", function () {
    cofres.forEach(function (cofre) {
        cofre.querySelector(".emoji").textContent = "🧰";
    });

    iniciarRodada();
});

// Zera os contadores e inicia uma nova rodada.
botaoZerar.addEventListener("click", function () {
    tentativas = 0;
    vitorias = 0;

    atualizarPlacar();

    cofres.forEach(function (cofre) {
        cofre.querySelector(".emoji").textContent = "🧰";
    });

    iniciarRodada();
});

// Prepara a primeira rodada do jogo.
iniciarRodada();

