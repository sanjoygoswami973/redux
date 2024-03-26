import React from "react";
import { useDispatch } from "react-redux";
import { division } from "../slices/countSlice";

const Division = () => {
  let dispatch = useDispatch();
  return <button onClick={() => dispatch(division(2))}>Division</button>;
};

export default Division;
