import React from "react";

const Plus = ({ onClick, btnText }) => {
  return (
    <>
      <button onClick={onClick}>{btnText}</button>
    </>
  );
};

export default Plus;
