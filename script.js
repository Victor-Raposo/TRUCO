let pontosA = 0;
let pontosB = 0;

function alterar(time, valor) {
    if(time === "A") {
        pontosA += valor;
        if(pontosA < 0) pontosA = 0;
        if(pontosA > 12) pontosA = 12;
    } else {
        pontosB += valor;
        if(pontosB < 0) pontosB = 0;
        if(pontosB > 12) pontosB = 12;
    }
    atualizar ();
}

function atualizar() {
    document.getElementById("pontosA").innerHTML = pontosA;
    document.getElementById("pontosB").innerHTML = pontosB;

    if(pontosA >= 12){
        document.getElementById("vencedor").innerHTML = "time 1 venceu!";
    }
    else if(pontosB >= 12){
        document.getElementById("vencedor").innerHTML = "time 2 venceu!";
    }
    else{
        document.getElementById("vencedor").innerHTML = "";
    }
}

function reiniciar(){
    pontosA = 0;
    pontosB = 0;
}