const total = document.querySelector("#total");
const btnSomar = document.querySelector("#somar");
const btnZerar = document.querySelector("#zerar");

let valor = 0;


total.textContent = valor;


btnSomar.addEventListener("click", () => {
    valor++;
    total.textContent = valor;
});


btnZerar.addEventListener("click", () => {
    valor = 0;
    total.textContent = valor;
});