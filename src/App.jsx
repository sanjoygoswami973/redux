import Division from "./components/Division";
import Minus from "./components/Minus";
import Multiplication from "./components/Multiplication";
import Plus from "./components/Plus";
import Result from "./components/Result";

function App() {
  return (
    <>
      <div className="mainDiv">
        <Plus />
        <Multiplication />
        <Result />
        <Minus />
        <Division />
      </div>
    </>
  );
}

export default App;
