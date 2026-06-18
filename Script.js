const dias = document.getElementById("dias");
const mesAno = document.getElementById("mesAno");
const dataAtual = document.getElementById("dataAtual");

let data = new Date();

const meses = [
    "Janeiro","Fevereiro","Março","Abril",
    "Maio","Junho","Julho","Agosto",
    "Setembro","Outubro","Novembro","Dezembro"
];

function mostrarDataAtual(){
    let hoje = new Date();

    dataAtual.innerHTML =
        hoje.getDate() + "/" +
        (hoje.getMonth()+1) + "/" +
        hoje.getFullYear();
}

function gerarCalendario(){
    dias.innerHTML = "";

    let ano = data.getFullYear();
    let mes = data.getMonth();

    mesAno.innerHTML = meses[mes] + " " + ano;

    let primeiroDia = new Date(ano, mes, 1).getDay();
    let ultimoDia = new Date(ano, mes + 1, 0).getDate();

    for(let i=0; i<primeiroDia; i++){
        dias.innerHTML += "<div></div>";
    }

    for(let dia=1; dia<=ultimoDia; dia++){

        let elemento = document.createElement("div");
        elemento.textContent = dia;

        let hoje = new Date();

        if(
            dia === hoje.getDate() &&
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear()
        ){
            elemento.classList.add("hoje");
        }

        dias.appendChild(elemento);
    }
}

document.getElementById("anterior").onclick = () =>{
    data.setMonth(data.getMonth()-1);
    gerarCalendario();
};

document.getElementById("proximo").onclick = () =>{
    data.setMonth(data.getMonth()+1);
    gerarCalendario();
};

mostrarDataAtual();
gerarCalendario();
