function gerarCorAleatoria() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function mudarCorDeFundo(){
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
}

document.getElementById('mudarCor').addEventListener('click', mudarCorDeFundo )