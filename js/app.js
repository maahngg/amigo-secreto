listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let nomeMin = nomeAmigo.value.toLowerCase().trim();

    if (nomeMin == '' || listaAmigos.includes(nomeMin)) {
        alert('Nome inválido ou já existente na lista!');
    } else {
        listaAmigos.push(nomeMin);
    }

    document.getElementById('lista-amigos').textContent = listaAmigos.join(', ');
    nomeAmigo.value = '';

}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function sortear() {

    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear!');
        return;
    }
    
    for (let indice = listaAmigos.length ; indice ; indice--) {

        let indiceAleatorio = Math.floor(Math.random() * indice);
        [listaAmigos[indice - 1], listaAmigos[indiceAleatorio]] = [listaAmigos[indiceAleatorio], listaAmigos[indice - 1]];
        
        //  ESSE CÓDIGO FAZ A MESMA COISA QUE A LINHA DE CIMA
        //  TROCA DE VALORES SEM USAR DESESTRUTURAÇÃO
        
        // let amigoAtual = listaAmigos[indice - 1];
        // listaAmigos[indice - 1] = listaAmigos[indiceAleatorio];
        // listaAmigos[indiceAleatorio] = amigoAtual;


    }

    for (let i = 0; i < listaAmigos.length; i++) {
        let sorteio = document.getElementById('lista-sorteio');
        
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML += `${listaAmigos[i]} -> ${listaAmigos[0]} <br>`;
        } else {
           sorteio.innerHTML += `${listaAmigos[i]} -> ${listaAmigos[i + 1]} <br>`;
        }
    }


}