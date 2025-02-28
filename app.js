//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let entrada = document.querySelector('input').value;

    if (!entrada) {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(entrada);

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

function sortearAmigo() {
    if (amigos.length === 0) {
        console.log("A lista de amigos está vazia!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}


