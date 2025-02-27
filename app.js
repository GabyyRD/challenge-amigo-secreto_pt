//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let entrada = document.querySelector('input').value;

    if (entrada.trim() !== "") {
        console.log("Entrada válida:", entrada);
        amigos.push(entrada);
    } else {
        alert("Por favor, insira um nome.");
    }

    limparCampo();
}

function limparCampo() {
    entrada = document.querySelector('input');
    entrada.value = '';
}

