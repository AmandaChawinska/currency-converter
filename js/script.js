let amount = document.querySelector(".js-amount");
let changeFrom = document.querySelector(".js-change");
let changeOn = document.querySelector(".js-changeOn");
let currency = document.querySelector(".js-currency");
let finalResult = document.querySelector(".js-result");
let resetButton = document.querySelector(".js-resetButton");

let ratePLN = 1.0;
let rateEUR = 4.4532;
let rateUSD = 3.9395;
let rateGBP = 4.9256;
let result;

currency.addEventListener("click", (event) => {
  event.preventDefault();

  switch (changeFrom.value) {
    case "PLN":
      result = +amount.value * ratePLN;
      break;
    case "EUR":
      result = +amount.value * rateEUR;
      break;
    case "USD":
      result = +amount.value * rateUSD;
      break;
    case "GBP":
      result = +amount.value * rateGBP;
      break;
  }
  switch (changeOn.value) {
    case "PLN":
      result /= ratePLN;
      break;
    case "EUR":
      result /= rateEUR;
      break;
    case "USD":
      result /= rateUSD;
      break;
    case "GBP":
      result /= rateGBP;
      break;
  }

  finalResult.innerText = result.toFixed(2);

  resetButton.addEventListener("click", () => {
    finalResult.innerHTML = "";
  });
});
