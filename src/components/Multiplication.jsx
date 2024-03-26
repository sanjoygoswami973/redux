import React from "react";
import { useDispatch } from "react-redux";
import { multiplication } from "../slices/countSlice";

const Multiplication = () => {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(multiplication(5))}>Multiplication</button>
  );
};

export default Multiplication;
