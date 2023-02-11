import "./App.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState(); //These states will store the values of the input field
  const [num2, setNum2] = useState();
  const [ans, setAns] = useState();
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    //first object is event & second will be a string
    const { name, value } = event.target;
    name === "num1" ? setNum1(value) : setNum2(value);
  };

  function check(num1, num2, action) {
    if (num1 != Number(num1) || num2 != Number(num2)) {
      setAns("");
      setResult("");
      setMessage("");
      return;
    } else {
      operations(num1, num2, action);
      setResult("Result = ");
      setMessage("Success: Your result is shown above!");
      setIsActive(true);
    }
  }

  const validation = (action) => {
    console.log("validation");
    if (num1 === null) {
      setMessage("Error: Num1 cannot be empty");
      setIsActive(false);
    } else if (num2 === null) {
      setAns("");
      setResult("");
      // setMessage("");
      setMessage("Error: Num2 cannot be empty");
      setIsActive(false);
    } else {
      // this function will check whether the enter text is a number or not and
      // if numbers then it will call the operation function
      check(num1, num2, action);
    }
  };

  const operations = (num1, num2, action) => {
    if (num1 != null && num2 != null) {
      if (action === "+") {
        setAns(Number(num1) + Number(num2));
      }
      if (action === "-") {
        setAns(num1 - num2);
      }
      if (action === "*") {
        setAns(num1 * num2);
      }
      if (action === "/") {
        setAns(num1 / num2);
      }
    }
  };

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <div className="inputContainer">
        <input
          placeholder="Num 1"
          type="text"
          name="num1"
          value={num1}
          onChange={handleChange}
        />
        <input
          placeholder="Num 2"
          type="text"
          name="num2"
          value={num2}
          onChange={handleChange}
        />
        <div className="buttonContainer">
          <button
            onClick={() => {
              validation("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              validation("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              validation("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              validation("/");
            }}
          >
            /
          </button>
        </div>
      </div>
      <p className="result">
        <span>
          {result} {ans}
        </span>
      </p>
      <p style={{ color: isActive ? "#47F558" : "#E33737" }}>{message}</p>
    </div>
  );
}

export default App;
