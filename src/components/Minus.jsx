import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../slices/countSlice";

const Minus = () => {
  let dispatch = useDispatch();
  return <button onClick={() => dispatch(decrement(1))}>Minus</button>;
};

export default Minus;
