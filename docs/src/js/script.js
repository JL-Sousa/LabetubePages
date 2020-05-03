function avisoDoVideo() {
    alert("Indisponível tente o video natureza, Lazer ou Universo!");
}

let curtir = 0;
let descurtir = 0;

function curtirVideo() {
    curtir++;
    let numeroCurtidas = document.getElementById("curtir");
    numeroCurtidas.innerHTML = curtir;
}

function descurtirVideo() {
    descurtir++;
    let numeroDescurtidas = document.getElementById("descurtir");
    numeroDescurtidas.innerHTML = descurtir;
}