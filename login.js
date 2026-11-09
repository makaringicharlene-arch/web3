const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const birthdayDialog = document.getElementById("birthdayDialog");
const continueButton = document.getElementById("continueButton");
const correctAnswers = ["D", "A", "D", "C", "B"];

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const allAnswersCorrect = correctAnswers.every((answer, index) => {
    const selected = loginForm.querySelector(`input[name="question${index + 1}"]:checked`);
    return selected && selected.value === answer;
  });

  if (allAnswersCorrect) {
    loginMessage.textContent = "";
    birthdayDialog.showModal();
    continueButton.focus();
    return;
  }

  loginMessage.textContent = "A few answers aren't quite right yet. Please try again.";
});

continueButton.addEventListener("click", () => {
  window.location.href = "messages.html";
});
