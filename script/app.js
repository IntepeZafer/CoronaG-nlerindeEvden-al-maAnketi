const questionForm = document.querySelector(".question-form");
const correctAnswer = ["E","E","E","E"];
let score = 0;

questionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userAnswer = [
        questionForm.q1.value,
        questionForm.q2.value,
        questionForm.q3.value,
        questionForm.q4.value
    ];
    userAnswer.forEach((answer , index) => {
        if(answer === correctAnswer[index]){
            score += 25;
        }
    });
    console.log(score)
})
