function checkAnswer() {
  const correctAnswer = "4";
  const selectedOption = document.querySelector('input[name="quiz"]');
  const feedback = document.getElementById("feedback");

  if (selectedOption) {
    const userAnswer = selectedOption.value;
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  }
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
