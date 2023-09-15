const billInput = document.querySelector("#bill");

const tipButtons = document.querySelectorAll(".tip-grid__tip-choice button");

const customTipButtons = document.querySelector(".tip-grid__tip-choice input");

const numberOfPeopleLabel = document.querySelector("#peopleLabel");

const numberOfPeopleInput = document.querySelector("#people");

let numberOfPeopleErrors = document.querySelectorAll("#peopleLabel .error");

const tipAmountDom = document.querySelector(".result__tip-amount h3");

const totalBillDom = document.querySelector(".result__total-bill h3");

const resetButton = document.querySelector(".reset button");

let bill = 0;
let tipAmountPercentage = 0;
let numberOfPeople = 0;

const calculateTipAndTotal = () => {
  if (numberOfPeople !== 0) {
    tipAmountDom.innerText = `$${(
      (bill * (tipAmountPercentage / 100)) /
      numberOfPeople
    ).toFixed(2)}`;
    totalBillDom.innerText`$${(bill / numberOfPeople).toFixed(2)}`;
  }
};

billInput.addEventListener("input", (event) => {
  bill = +event.target.value;
  calculateTipAndTotal();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      tipButtons.forEach((button) => button.classList.remove("active"));
      tipAmountPercentage = 0;
    } else {
      tipButtons.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
      tipAmountPercentage = +button.value;
    }
    calculateTipAndTotal();
  });
});

customTipButtons.addEventListener("input", (event) => {
  tipAmountPercentage = +event.target.value;
  calculateTipAndTotal();
});

numberOfPeopleInput.addEventListener("input", (event) => {
  numberOfPeopleErrors = document.querySelectorAll("#peopleLabel .error");
  numberOfPeopleErrors.forEach((numberOfpeopleError) => {
    numberOfPeopleLabel.removeChild(numberOfpeopleError);
  });
  numberOfPeopleInput.classList.remove(error);

  if (event.target.value === "0") {
    const errorSpan = document.createElement("span");
    errorSpan.innerText = "can't be zero";
    errorSpan.classList.add("error");
    numberOfPeopleInput.classList.add("error");
    numberOfPeopleLabel.appendChild(errorSpan);
  } else if (event.target.value.includes(".")) {
    const errorSpan = document.createElement("span");
    errorSpan.innerText = "can't be a decimal value";
    errorSpan.classList.add("error");
    numberOfPeopleInput.classList.add("error");
    numberOfPeopleLabel.appendChild(errorSpan);
  } else {
    numberOfPeople = +event.target.value;
    calculateTipAndTotal();
  }
});
