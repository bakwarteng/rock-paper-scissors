import React, { useState } from "react";
import "../assets/App.css";
import "../assets/index.css";

const choices = ["Rock", "Paper", "Scissors"];

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return "It's a tie!";
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  const handleClick = (choice) => {
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    setResult(determineWinner(choice, computerRandomChoice));
  };

  return (
    <div className="App">
      <h1>Rock-Paper-Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="results">
        <h2>Your Choice: {userChoice}</h2>
        <h2>Computer's Choice: {computerChoice}</h2>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};

export default App;
