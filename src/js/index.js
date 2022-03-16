let prato, bebida, sobremesa;

function escolherFrango() {
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("carne").style.borderColor = "white";
    prato = "frango";
}
function escolherCarne() {
    document.getElementById("carne").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    prato = "carne";
}

function escolherCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("suco").style.borderColor = "white";
    bebida = "coca";
}
function escolherSuco() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("suco").style.borderColor = "green";
    bebida = "suco";
}

function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("sorvete").style.borderColor = "white";
    sobremesa = "pudim";
}
function escolherSorvete() {
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("sorvete").style.borderColor = "green";
    sobremesa = "sorvete";
}

function finalizarPedido() {
    let mensagem;

    mensagem =
        "Olá, gostaria de pedir um combo: " + prato + ", " + bebida + " e " + sobremesa;
        

    window.open(
        `https://wa.me/5531996359302?text=${mensagem}`,
        (target = "_blank")
    );
}