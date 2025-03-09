
    const listaAmigos = [];
    const inputAmigo = document.getElementById('amigo');
    const listaAmigosElement = document.getElementById('listaAmigos');

    window.adicionarAmigo = function() {
        const nomeAmigo = inputAmigo.value.trim();

        if (nomeAmigo !== '') {
            listaAmigos.push(nomeAmigo);
            inputAmigo.value = '';
            atualizarListaAmigos();
        }
    };

    function atualizarListaAmigos() {
        listaAmigosElement.innerHTML = '';
        listaAmigos.forEach(nome => {
            const li = document.createElement('li');
            li.textContent = nome;
            listaAmigosElement.appendChild(li);
        });
    }

    window.sortearAmigo = function() {
        if (listaAmigos.length < 2) {
            alert("Adicione pelo menos dois amigos para sortear.");
            return;
        }

        const amigosEmbaralhados = [...listaAmigos];
        embaralharArray(amigosEmbaralhados);

        const sorteio = {};
        for (let i = 0; i < listaAmigos.length; i++) {
            sorteio[listaAmigos[i]] = amigosEmbaralhados[(i + 1) % listaAmigos.length];
        }

        const primeiroAmigo = listaAmigos[0];
        alert(`${primeiroAmigo}, você tirou ${sorteio[primeiroAmigo]}`);
    };

    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

alert 