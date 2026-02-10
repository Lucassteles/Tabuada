const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const operationsContainer = document.querySelector("#multiplication-operation");
const titleSpan = document.querySelector("#multiplication-title span");

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = Number(numberInput.value);
  const multiplicatorNumber = Number(multiplicatorInput.value);

  if (!multiplicationNumber || !multiplicatorNumber) {
    alert("Preencha os dois campos!");
    return;
  }

  titleSpan.textContent = multiplicationNumber;
  operationsContainer.innerHTML = "";

  for (let i = 1; i <= multiplicatorNumber; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    const operation = document.createElement("div");
    operation.classList.add("operation");
    operation.textContent = `${multiplicationNumber} x ${i} = `;

    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = multiplicationNumber * i;

    row.appendChild(operation);
    row.appendChild(result);
    operationsContainer.appendChild(row);
  }
});
