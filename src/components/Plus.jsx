import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../slices/countSlice";

const Plus = () => {
  let dispatch = useDispatch();
  return <button onClick={() => dispatch(increment(1))}>Plus</button>;
};

export default Plus;
