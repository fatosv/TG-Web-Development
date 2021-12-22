let firstName = document.getElementById("naam");
let phoneNumber = document.getElementById("nummer");
let streetName = document.getElementById("straat");
let houseNumber = document.getElementById("huisnummer");
let postCode = document.getElementById("postcode");
let city = document.getElementById("stad");
let emailAdress = document.getElementById("email");
const button = document.querySelector(".button");
let idCard = document.querySelector(".id-card");
let cardName = document.querySelector(".card-naam");
let cardPhoneNumber = document.querySelector(".card-nummer");
let cardAdress = document.querySelector(".card-adres");
let cardEmail = document.querySelector(".card-email");
let cardIdNumber = document.querySelector(".card-id");

function logText() {
  console.log(firstName.value);
}

button.addEventListener("click", () => {
  console.log("test");
  //   cardName.innerHTML = "Naam:" + firstName;
});

// function clickFunction() {
//   alert("test");
//   console.log("test");
// }
