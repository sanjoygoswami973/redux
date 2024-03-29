import { useState } from "react";
import Division from "./Division";
import Minus from "./Minus";
import Multiplication from "./Multiplication";
import Plus from "./Plus";
import Result from "./Result";
import { useDispatch } from "react-redux";
import {
  decrement,
  division,
  increment,
  multiplication,
} from "../slices/countSlice";

const Calculation = () => {
  let dispatch = useDispatch();

  let [input, setInput] = useState();
  let handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="mainBody">
      <div className="mainDiv">
        <h1>Redux Calculation</h1>

        <Plus onClick={() => dispatch(increment(+input))} btnText="Plus" />
        <Multiplication
          onClick={() => dispatch(multiplication(+input))}
          btnText="Multiplication"
        />
        <input
          type="text"
          placeholder="Enter A Number"
          onChange={handleChange}
        />
        <Result />
        <Minus onClick={() => dispatch(decrement(+input))} btnText="Minus" />
        <Division
          onClick={() => dispatch(division(+input))}
          btnText="Division"
        />
      </div>
    </div>
  );
};

export default Calculation;
