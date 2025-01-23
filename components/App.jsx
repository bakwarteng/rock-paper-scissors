import React, { useState } from "react";
import "../assets/App.css";

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const choices = ["Rock✊", "Paper🤚", "Scissors✌"];

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "Rock✊" && computer === "Scissors✌") ||
      (user === "Paper🤚" && computer === "Rock✊") ||
      (user === "Scissors✌" && computer === "Paper🤚")
    ) {
      setUserScore((prevScore) => prevScore + 1);
      setResult("You Win!");
    } else {
      setComputerScore((prevScore) => prevScore + 1);
      setResult("You lost this round, Computer Wins!");
    }
  };

  const handleClick = (choice) => {
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
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
        <h2>{result}</h2>
        <h2>Your Score: {userScore}</h2>
        <h2>Computer's Score: {computerScore}</h2>
      </div>
    </div>
  );
};

export default App;
