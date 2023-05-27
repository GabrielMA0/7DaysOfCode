let input = document.querySelector("#input");
let divResposta = document.querySelector("#resposta");
let buttonToGuess = document.querySelector("#button-To-Guess");
let attempts = 0;

// INICIAR UMA FUNÇÃO PRA TODA VEZ QUE RECARREGAR A PÁGINA!
window.onload = function () {
    input.focus();
    attempts = 0;
};

function toGuess() {
    let computerNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    let valueInput = input.value;
    if (
        valueInput > 10 ||
        valueInput < 0 ||
        valueInput === "" ||
        valueInput === null
    ) {
        alert("Coloque um número válido!");
        divResposta.innerHTML = "";
        input.value = "";
        input.focus();
    } else if (valueInput == computerNumber) {
        divResposta.innerHTML = `<p>Parabéns você acertou!</p>`;
        input.value = "";
        input.focus();
    } else {
        divResposta.innerHTML = `<p>Você errou, o número era ${computerNumber}</p>`;
        input.value = "";
        input.focus();
        attempts++;
    }
    if (attempts > 3) {
        divResposta.innerHTML = "";
        alert(
            "Acabou suas tentativas, reinicia a página para jogar novamente!"
        );
        buttonToGuess.disabled = true;
    }
}

// ADICIONANDO A FUNÇÃO DE APERTAR O BOTÃO COM ENTER

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        buttonToGuess.click();
    }
});
