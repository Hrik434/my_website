// script.js

// Function to handle the energy consumption calculation
document.getElementById("energy-form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const electricity = parseFloat(document.getElementById("electricity").value) || 0;
  const water = parseFloat(document.getElementById("water").value) || 0;
  const gas = parseFloat(document.getElementById("gas").value) || 0;

  const carbonFootprint = (electricity * 0.5) + (water * 0.1) + (gas * 2); // Dummy calculation
  document.getElementById("results").innerText = `Your carbon footprint is ${carbonFootprint.toFixed(2)} kg CO2e.`;
});

// Function to start a quiz
function startQuiz() {
  const quizSection = document.getElementById("quiz-section");
  const questions = [
    {
      question: "What is the main greenhouse gas?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
      answer: 0
    },
    {
      question: "How can we save energy at home?",
      options: ["Turn off lights", "Use incandescent bulbs", "Keep doors open", "None of the above"],
      answer: 0
    }
  ];

  let quizHTML = "";
  questions.forEach((q, index) => {
    quizHTML += `<h3>${index + 1}. ${q.question}</h3>`;
    q.options.forEach((option, i) => {
      quizHTML += `<label><input type="radio" name="q${index}" value="${i}"> ${option}</label><br>`;
    });
  });
  quizHTML += '<button onclick="checkAnswers()">Submit</button>';
  quizSection.innerHTML = quizHTML;
}

// Function to check quiz answers
function checkAnswers() {
  const questions = [
    { answer: 0 },
    { answer: 0 }
  ];
  
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });
  alert(`Your score: ${score}/${questions.length}`);
}

// Function to start the energy management game
function startGame() {
  const gameSection = document.getElementById("game-section");
  gameSection.innerHTML = `<h3>Welcome to the Energy Management Game!</h3>
    <p>Make choices to balance energy resources. More features can be implemented!</p>`;
}
