//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let entrada = document.querySelector('input').value;

    if (entrada.trim() !== "") {
        amigos.push(entrada);
    } else {
        alert("Por favor, insira um nome.");
    }
    
    atualizarLista();
    limparCampo();
}

function limparCampo() {
    entrada = document.querySelector('input');
    entrada.value = '';
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

