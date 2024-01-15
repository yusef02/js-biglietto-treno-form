console.log("JS OK");

// reccolgo gli elementi che mi servono dal html e li inizializzo in costanti
const passengerNameInput = document.getElementById("passengerName");
const passengerKmInput = document.getElementById("passengerKm");
const passengerAgeInput = document.getElementById("passengerAge");

const generateTiketButton = document.getElementById("generateTiket");
const cancelTiketButton = document.getElementById("cancelTiket");

// inizializo la costante del prezzo al km e il costo del biglietto
const priceKm = 0.21;
let priceTiket = 0;

// if (
//   passengerNameInput.value === "" ||
//   passengerKmInput.value === "" ||
//   passengerAgeInput.value === "" ||
//   isNaN(parseInt(passengerKmInput.value))
// ) {
//   const invalidDataElement = document.createElement("div");
//   invalidDataElement.classList.add("text-danger", "text-center");
//   invalidDataElement.innerHTML = `I dati inseriti non sono validi`;

//   document
//     .querySelector("#calcTiketSection form")
//     .appendChild(invalidDataElement);
// } else {

// creo un evento al click del bottone genera che elaborerà i dati
generateTiketButton.addEventListener("click", function () {
  // inizializzo costanti in cui salvo i valori dei elementi precedentemente salvati
  const pnNameVal = passengerNameInput.value;
  console.log(pnNameVal);
  const pnKmVal = passengerKmInput.value;
  console.log(pnKmVal);
  const pnAgeVal = passengerAgeInput.value;
  console.log(pnAgeVal);

  // calcolo il prezzo del biglietto
  priceTiket = pnKmVal * priceKm;
  console.log(priceTiket);

  let offerta = "";
  // applico le offerte
  if (pnAgeVal == "minorenne") {
    priceTiket = (priceTiket / 100) * 80;
    console.log(`prezzo calcolato per ${pnAgeVal} è di ${priceTiket}`);
    offerta = `20%`;
  } else if (pnAgeVal == "over65") {
    priceTiket = (priceTiket / 100) * 60;
    console.log(`prezzo calcolato per ${pnAgeVal} è di ${priceTiket}`);
    offerta = `40%`;
  } else {
    console.log(`prezzo calcolato per ${pnAgeVal} è di ${priceTiket}`);
  }
  priceTiket = priceTiket.toFixed(2);

  // inizializzo e assegno valori numerici randomici alle varibili
  let numCarrozza = Math.floor(Math.random() * 25);
  console.log(numCarrozza);
  let codiceCP = Math.floor(Math.random() * 25000);
  console.log(codiceCP);

  // inserisco i dati nel tiket
  document.querySelector(
    "#tiketNomePassegero .card-body"
  ).innerHTML = `<span>${pnNameVal}</span>`;
  document.querySelector(
    "#tiketOfferte .card-body"
  ).innerHTML = `<span>${offerta}</span>`;
  document.querySelector(
    "#tiketCarrozza .card-body"
  ).innerHTML = `<span>${numCarrozza}</span>`;
  document.querySelector(
    "#tiketCodiceCP .card-body"
  ).innerHTML = `<span>${codiceCP}</span>`;
  document.querySelector(
    "#tiketCostoBiglietto .card-body"
  ).innerHTML = `<span>${priceTiket}</span>`;

  document.getElementById("tiketSection").classList.remove("d-none");
});

// genero un evento per il button annulla che svuota gli input
cancelTiketButton.addEventListener("click", function () {
  passengerNameInput.value = "";
  passengerKmInput.value = "";
  passengerAgeInput.value = "";
});
// }
