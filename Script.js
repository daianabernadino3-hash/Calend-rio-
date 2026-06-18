const monthYear = document.getElementById("monthYear");
const daysContainer = document.getElementById("days");

let currentDate = new Date();

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

function renderCalendar() {
  daysContainer.innerHTML = "";

  let ano = currentDate.getFullYear();
  let mes = currentDate.getMonth();

  monthYear.textContent = `${meses[mes]} ${ano}`;

  let primeiroDia = new Date(ano, mes, 1).getDay();
  let ultimoDia = new Date(ano, mes + 1, 0).getDate();

  for (let i = 0; i < primeiroDia; i++) {
    let vazio = document.createElement("div");
    daysContainer.appendChild(vazio);
  }

  for (let dia = 1; dia <= ultimoDia; dia++) {
    let divDia = document.createElement("div");
    divDia.textContent = dia;

    if (
      dia === new Date().getDate() &&
      mes === new Date().getMonth() &&
      ano === new Date().getFullYear()
    ) {
      divDia.classList.add("hoje");
    }

    daysContainer.appendChild(divDia);
  }
}

document.getElementById("prev").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("next").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
