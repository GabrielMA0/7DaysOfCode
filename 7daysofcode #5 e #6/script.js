let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let todasCategorias = [];

function listaDeCompras() {
    let opcao = prompt(
        "Você deseja adicionar uma comida na sua lista de compras? (Sim/Não)\n\n ou (remover) para remover algum item da lista."
    );

    if (
        opcao.toLowerCase() !== "sim" &&
        opcao.toLowerCase() !== "não" &&
        opcao.toLowerCase() !== "remover"
    ) {
        alert("Resposta inválida");
        listaDeCompras();
    }
    if (opcao.toLowerCase() === "sim") {
        adicionarItens();
    }
    if (opcao.toLowerCase() === "não") {
        alert(
            `Lista de compras: \n\nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`
        );
        console.log(
            `Lista de compras: \n\nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`
        );
    }
    if (todasCategorias.length === 0) {
        alert("Lista de compras vazias!");
        listaDeCompras();
    } else {
        if (opcao.toLowerCase() === "remover") {
            removerItens();
        }
    }
}

function adicionarItens() {
    let comida = prompt("Qual comida você deseja colocar na lista?");

    if (comida === "") {
        alert("Preencha o campo!");
    } else {
        let categoriaComida = prompt(
            "Qual categoria essa comida se encaixa? (Opções: frutas, laticínios, congelados, doces)"
        );
        if (categoriaComida.toLowerCase() === "frutas") {
            frutas.push(comida);
            todasCategorias += frutas.slice();
            console.log(frutas);
        } else if (categoriaComida.toLowerCase() === "laticínios") {
            laticinios.push(comida);
            todasCategorias += laticinios.slice();
            console.log(laticinios);
        } else if (categoriaComida.toLowerCase() === "congelados") {
            congelados.push(comida);
            todasCategorias += congelados.slice();
            console.log(congelados);
        } else if (categoriaComida.toLowerCase() === "doces") {
            doces.push(comida);
            todasCategorias += doces.slice();
            console.log(doces);
        } else {
            alert("Categoria não encontrada!");
            adicionarItens();
        }
        listaDeCompras();
    }
}

function removerItens() {
    let removerItem = prompt(
        `Qual item da lista você gostaria de tirar? \n\nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`
    );
    if (removerItem === "") {
        alert("Campo vazio, digite algum item da lista para remover!");
    } else {
        if (frutas.includes(removerItem)) {
            frutas.splice(frutas.indexOf(removerItem), 1);
            alert("Item removido!");
        } else if (laticinios.includes(removerItem)) {
            laticinios.splice(laticinios.indexOf(removerItem), 1);
            alert("Item removido!");
        } else if (congelados.includes(removerItem)) {
            congelados.splice(congelados.indexOf(removerItem), 1);
            alert("Item removido!");
        } else if (doces.includes(removerItem)) {
            doces.splice(doces.indexOf(removerItem), 1);
            alert("Item removido!");
        } else {
            alert("Item não encontrado!");
            removerItens();
        }
    }

    listaDeCompras();
}

listaDeCompras();
