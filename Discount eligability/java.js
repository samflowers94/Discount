function checkEligibility() {
  const ageIn = document.getElementById("age");
  const memberCh = document.getElementById("member");
  const resultElement = document.getElementById("output");

  const age = parseInt(ageIn.value);
  const member = memberCh.checked;

  if (age >= 18 && member) {
    resultElement.textContent = "You are eligible for the dicount!😊";
  } else if (age >= 65) {
    resultElement.textContent = "You are eligible for the Discount!😊";
  } else {
    resultElement.textContent =
      "Sorry, You are not eligible for the discount😓.";
  }
}
