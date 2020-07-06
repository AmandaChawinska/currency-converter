{

  const calculateAmount = (changeFrom, changeOn) => {

      const rateEUR = 4.4532;
      const rateUSD = 3.9395;
      const rateGBP = 4.9256;
      let amount = +document.querySelector(".js-amount").value;
      let valueInPLN;

      switch (changeFrom) {
          case "PLN":
              valueInPLN = amount;
              break;
          case "EUR":
              valueInPLN = amount * rateEUR;
              break;
          case "USD":
              valueInPLN = amount * rateUSD;
              break;
          case "GBP":
              valueInPLN = amount * rateGBP;
              break;
      }

      switch (changeOn) {
          case "PLN":
              return valueInPLN;

          case "EUR":
              return valueInPLN / rateEUR;

          case "USD":
              return valueInPLN / rateUSD;

          case "GBP":
              return valueInPLN / rateGBP;

      }

  };

  const convertMoney = () => {

      const changeFrom = document.querySelector(".js-change").value;
      const changeOn = document.querySelector(".js-changeOn").value;

      const finalResult = document.querySelector(".js-result");
      console.log(calculateAmount(changeFrom, changeOn));
      finalResult.innerText = calculateAmount(changeFrom, changeOn).toFixed(2);

  };

  const reset = () => {

      const resetButton = document.querySelector(".js-resetButton");
      resetButton.addEventListener("click", () => {
          finalResult.innerHTML = "";
      });
  };

  const init = () => {
      document.querySelector(".js-form").addEventListener("submit", () => {
          event.preventDefault();
          convertMoney();
          reset();
      });
  };

  init();

}

