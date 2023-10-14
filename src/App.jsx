
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumberClick = (num) => {
    setCurrentOperand(currentOperand + num);
  };

  const handleOperatorClick = (operator) => {
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    setOperation(operator);
  };

  const handleEqualsClick = () => {
    let result;
    switch (operation) {
      case "+":
        result = parseFloat(previousOperand) + parseFloat(currentOperand);
        break;
      case "-":
        result = parseFloat(previousOperand) - parseFloat(currentOperand);
        break;
      case "*":
        result = parseFloat(previousOperand) * parseFloat(currentOperand);
        break;
      case "/":
        result = parseFloat(previousOperand) / parseFloat(currentOperand);
        break;
      default:
        result = currentOperand;
    }
    setCurrentOperand(result.toString());
    setPreviousOperand("");
    setOperation("");
  };

  const handleClearClick = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation("");
  };

  return (
    <div className="caluclator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={handleClearClick}>AC</button>
      <button onClick={() => setCurrentOperand(currentOperand.slice(0, -1))}>DEL</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={() => handleNumberClick("1")}>1</button>
      <button onClick={() => handleNumberClick("2")}>2</button>
      <button onClick={() => handleNumberClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleNumberClick("4")}>4</button>
      <button onClick={() => handleNumberClick("5")}>5</button>
      <button onClick={() => handleNumberClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleNumberClick("7")}>7</button>
      <button onClick={() => handleNumberClick("8")}>8</button>
      <button onClick={() => handleNumberClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleNumberClick(".")}>.</button>
      <button onClick={() => handleNumberClick("0")}>0</button>
      <button className="span-two" onClick={handleEqualsClick}>=</button>
    </div>
  );
}

export default App;
