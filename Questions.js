function question(text, choices, answer) {
  this.text = text;
  this.answer = answer;
  this.choices = choices;
}
question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
};
