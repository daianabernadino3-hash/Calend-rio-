const monthYear = document.getElementById("monthYear");
const weekdays = document.getElementById("weekdays");
const daysContainer = document.getElementById("days");
const languageSelect = document.getElementById("language");

let currentDate = new Date();

function renderCalendar() {
    daysContainer.innerHTML = "";
    weekdays.innerHTML = "";

    const lang = languageSelect.value;

    const diasSemana = {
        pt: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."],
        en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };

    diasSemana[lang].forEach(dia => {
        const div = document.createElement("div");
        div.textContent = dia;
        weekdays.appendChild(div);
    });

    const ano = currentDate.getFullYear();
    const mes = currentDate.getMonth();

    monthYear.textContent =
        currentDate.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
            month: "long",
            year: "numeric"
        });

    const primeiroDia = new Date(ano, mes, 1).getDay();
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();

    for (let i = 0; i < primeiroDia; i++) {
        daysContainer.innerHTML += "<div></div>";
    }

    for (let dia = 1; dia <= ultimoDia; dia++) {
        const div = document.createElement("div");
        div.textContent = dia;
        daysContainer.appendChild(div);
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

languageSelect.addEventListener("change", renderCalendar);

renderCalendar();
