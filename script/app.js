const questionForm = document.querySelector(".question-form");
const result = document.querySelector(".result");
const paragrafSpan = document.querySelector("p span");
const correctAnswer = ["E","E","E","E"];
let score = 0;
let puan = 0;
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
    result.classList.remove("d-none");
    
    const setIntervalStart = setInterval(() => {
        paragrafSpan.textContent = `${puan}%`;
        if(puan === score){
            clearInterval(setIntervalStart);
        }else{
            puan++;
        }
    } ,10);
});