let elementoSelect = document.querySelector("#opcoes-operacoes");
let btns = document.querySelector(".btns");
let botaoCalcular = document.querySelector("#btn-calcular");
let botaoSair = document.querySelector("#btn-sair");
let input = document.querySelector("#input");
let input2 = document.querySelector("#input2");
let textoResultado = document.querySelector("#resultado-calculo");

function atualizarSelect() {
    let opçãoSelecionada = elementoSelect.options[elementoSelect.selectedIndex];
    let textoSelecionado = opçãoSelecionada.text;

    if (textoSelecionado == "" || textoSelecionado === null) {
        btns.classList.add("hide");
        input.classList.add("hide");
        input2.classList.add("hide");
        textoResultado.classList.add("hide");
    } else {
        btns.classList.remove("hide");
        input.classList.remove("hide");
        input2.classList.remove("hide");
        input.focus();
    }
}

function calcular() {
    let opçãoSelecionada = elementoSelect.options[elementoSelect.selectedIndex];
    let textoSelecionado = opçãoSelecionada.text;

    if (textoSelecionado === "Soma") {
        let valorInput1 = input.value;
        let valorInput2 = input2.value;
        let valorInput1Numero = parseInt(valorInput1);
        let valorInput2Numero = parseInt(valorInput2);

        console.log(valorInput1Numero);
        console.log(valorInput2Numero);

        textoResultado.classList.remove("hide");

        textoResultado.innerHTML = `Resultado: ${
            valorInput1Numero + valorInput2Numero
        }`;
        input.focus();
        input.value = "";
        input2.value = "";
    }
    if (textoSelecionado === "Subtração") {
        let valorInput1 = input.value;
        let valorInput2 = input2.value;
        let valorInput1Numero = parseInt(valorInput1);
        let valorInput2Numero = parseInt(valorInput2);

        console.log(valorInput1Numero);
        console.log(valorInput2Numero);

        textoResultado.classList.remove("hide");

        textoResultado.innerHTML = `Resultado: ${
            valorInput1Numero - valorInput2Numero
        }`;

        input.focus();
        input.value = "";
        input2.value = "";
    }
    if (textoSelecionado === "Multiplicação") {
        let valorInput1 = input.value;
        let valorInput2 = input2.value;
        let valorInput1Numero = parseInt(valorInput1);
        let valorInput2Numero = parseInt(valorInput2);

        console.log(valorInput1Numero);
        console.log(valorInput2Numero);

        textoResultado.classList.remove("hide");

        textoResultado.innerHTML = `Resultado: ${
            valorInput1Numero * valorInput2Numero
        }`;

        input.focus();
        input.value = "";
        input2.value = "";
    }
    if (textoSelecionado === "Divisão") {
        let valorInput1 = input.value;
        let valorInput2 = input2.value;
        let valorInput1Numero = parseInt(valorInput1);
        let valorInput2Numero = parseInt(valorInput2);

        console.log(valorInput1Numero);
        console.log(valorInput2Numero);

        textoResultado.classList.remove("hide");

        textoResultado.innerHTML = `Resultado: ${
            valorInput1Numero / valorInput2Numero
        }`;

        input.focus();
        input.value = "";
        input2.value = "";
    }
}

function sair() {
    alert("Até a próxima");
    textoResultado.classList.add("hide");
    textoResultado.innerHTML = "";
}

document.addEventListener("keyup", function (e) {
    if (e.keyCode === 27) {
        botaoSair.click();
    }
});
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        botaoCalcular.click();
    }
});
