const amountInput = document.getElementById("amount");

const currencySelect = document.getElementById("opcao")

const button = document.getElementById("convertButton")

const span = document.getElementById("conversao_resultado")

button.addEventListener ("click", () => {
  const amount = parseFloat(amountInput.value);
  const currency = currencySelect.value;
  console.log(amount, currency);
});
