class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)

    constructor (questions,timeLimit,timeRemaining){

        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;

        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;

    }

    // 2. getQuestion()

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }

    // 3. moveToNextQuestion()

    moveToNextQuestion() {
         return this.currentQuestionIndex++

    }

    // 4. shuffleQuestions()

    shuffleQuestions() {
  for (let i = this.questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
  }
}

    // 5. checkAnswer(answer)
    checkAnswer(answer) {
  const currentQuestion = this.questions[this.currentQuestionIndex];

  if (answer === currentQuestion.answer) {
    this.correctAnswers++;
  }
}

    // 6. hasEnded()
      hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        }
        else {
            return true;
        }
      }

      // DAY 2: Development Tasks:

      //1 - Implement method
      //Filter Questions By Difficulty method:  
     filterQuestionsByDifficulty(difficulty) {
    // If difficulty is not 1, 2, or 3 → do nothing
    if (difficulty !== 1 && difficulty !== 2 && difficulty !== 3) {
      return;
    }

    this.questions = this.questions.filter((question) => {
      return question.difficulty === difficulty;
    });
  }

     // 2 - Implemented method
     // Average Difficulty 

  averageDifficulty() {

  let sum = this.questions.reduce ((acc, questions) => {

    return acc + questions.difficulty;
  },0);

  const promedio = sum / this.questions.length;
  return promedio;




}





}




