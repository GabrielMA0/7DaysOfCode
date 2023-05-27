// let selectProgramming = document.querySelector("#select-programming");
// let selectFrontEnd = document.querySelector("#select-front-end");
// let selectBackEnd = document.querySelector("#select-back-end");
// let divFrontEnd = document.querySelector("#Front-end");
// let divBackEnd = document.querySelector("#Back-end");
// let divfullStack = document.querySelector("#Full-stack");
// let divReact = document.querySelector("#react");
// let divVue = document.querySelector("#vue");

// function handleSelectProgramming() {
//     let optionsSelectProgramming =
//         selectProgramming.options[selectProgramming.selectedIndex];
//     let textOptionsSelectProgramming = optionsSelectProgramming.text;

//     if (textOptionsSelectProgramming === "Front-end") {
//         divFrontEnd.style.display = "block";
//     } else {
//         divFrontEnd.style.display = "none";
//     }

//     if (textOptionsSelectProgramming === "Back-end") {
//         divBackEnd.style.display = "block";
//     } else {
//         divBackEnd.style.display = "none";
//     }
// }

// function handleSelectFrontEnd() {
//     let optionsSelectFrontEnd =
//         selectFrontEnd.options[selectFrontEnd.selectedIndex];
//     let textOptionsSelectFrontEnd = optionsSelectFrontEnd.text;

//     if (textOptionsSelectFrontEnd === "React") {
//         divReact.style.display = "block";
//     } else {
//         divReact.style.display = "none";
//     }
//     if (textOptionsSelectFrontEnd === "Vue") {
//         divVue.style.display = "block";
//     } else {
//         divVue.style.display = "none";
//     }
// }
// function handleSelectBackEnd() {
//     let optionsSelectBackEnd =
//         selectBackEnd.options[selectBackEnd.selectedIndex];
//     let textOptionsSelectBackEnd = optionsSelectBackEnd.text;

//     if (textOptionsSelectBackEnd === "C#") {
//         div.style.display = "block";
//     } else {
//         divReact.style.display = "none";
//     }
//     if (textOptionsSelectBackEnd === "Java") {
//         divVue.style.display = "block";
//     } else {
//         divVue.style.display = "none";
//     }
// }
function choiceSelection() {
    let choice = prompt(
        "Você quer seguir para a área de Front-End ou Back-end?"
    );

    if (choice.toLowerCase() === "front-end") {
        frontEndChoice();
    } else if (choice.toLowerCase() === "back-end") {
        backendChoice();
    } else {
        alert("Opção inválida");
        choiceSelection();
    }
}

function frontEndChoice() {
    let framework = prompt("Você quer aprender React ou Vue?");

    if (framework.toLowerCase() === "react") {
        alert("Você escolheu aprender React.");
        specializationChoice();
    } else if (framework.toLowerCase() === "vue") {
        alert("Você escolheu aprender Vue.");
        specializationChoice();
    } else {
        alert("Opção inválida.");
    }
}
function backendChoice() {
    let language = prompt("Você quer aprender C# ou Java?");

    if (language.toLowerCase() === "c#") {
        alert("Você escolheu aprender C#.");
        specializationChoice();
    }
    if (language.toLowerCase() === "java") {
        alert("Você escolheu aprender Java.");
        specializationChoice();
    } else {
        alert("Opção inválida.");
    }
}

function specializationChoice() {
    let choice = prompt(
        "Você quer se especializar na área escolhida ou se desenvolver como Fullstack? (especializar/fullstack)"
    );

    if (
        choice.toLowerCase() === "especializar" ||
        choice.toLocaleLowerCase() === "fullstack"
    ) {
        technologyChoice();
    } else {
        console.log("Opção inválida.");
    }
}

function technologyChoice() {
    let technologies = [];
    let choice = "";

    while (choice.toLowerCase() !== "não") {
        choice = prompt(
            "Digite o nome de uma tecnologia que você gostaria de aprender (ou 'não' para encerrar)"
        );

        if (choice.toLowerCase() !== "não") {
            technologies.push(choice);
            console.log("Você escolheu aprender " + choice + ".");
        }
    }
}
choiceSelection();
