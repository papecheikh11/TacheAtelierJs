const montantInput = document.querySelector("#montant");

const bouttons = document.querySelectorAll(".choice button");

const bouttonCustom = document.querySelector(".choice input");

const numberOfPeopleLabel = document.querySelector("#peopleLabel");

const numberOfpeopleInput = document.querySelector("#people");

let numberOfpeopleErrors = document.querySelectorAll("#peopleLabel .error");

const tipAmountDom = document.querySelector(".result-tip h3");

const totalAmountDom = document.querySelector(".result-total h3");

const resetButton = document.querySelector(".reset button");

let montant = 0;
let tipAmountPercentage = 0;
let numberOfPeople = 0;

const calculateTipAndTotal = () => {
  if (numberOfPeople !== 0) {
    tipAmountDom.innerText = `$${(
      (montant * (tipAmountPercentage / 100)) /
      numberOfPeople
    ).toFixed(2)}`;
    totalAmountDom.innerText`$${(montant / numberOfPeople).toFixed(2)}`;
  }
};

montantInput.addEventListener("input", (event) => {
  montant = +event.target.value;
  calculateTipAndTotal();
});

bouttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      bouttons.forEach((button) => button.classList.remove("active"));
      tipAmountPercentage = 0;
    } else {
      bouttons.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
      tipAmountPercentage = +button.value;
    }
    calculateTipAndTotal();
  });
});

bouttonCustom.addEventListener("input", (event) => {
  tipAmountPercentage = +event.target.value;
  calculateTipAndTotal();
});

numberOfpeopleInput.addEventListener("input", (event) => {
  numberOfpeopleErrors = document.querySelectorAll("#peopleLabel .error");
  numberOfpeopleErrors.forEach((numberOfpeopleError) => {
    numberOfPeopleLabel.removeChild(numberOfpeopleError);
  });
  numberOfpeopleInput.classList.remove(error);

  if (event.target.value === "0") {
    const errorSpan = document.createElement("span");
    errorSpan.innerText = "can't be zero";
    errorSpan.classList.add("error");
    numberOfpeopleInput.classList.add("error");
    numberOfPeopleLabel.appendChild(errorSpan);
  } else if (event.target.value.includes(".")) {
    const errorSpan = document.createElement("span");
    errorSpan.innerText = "can't be a decimal value";
    errorSpan.classList.add("error");
    numberOfpeopleInput.classList.add("error");
    numberOfPeopleLabel.appendChild(errorSpan);
  } else {
    numberOfPeople = +event.target.value;
    calculateTipAndTotal();
  }
});
