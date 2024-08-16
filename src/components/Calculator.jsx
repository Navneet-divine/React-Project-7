import { useState } from "react";
import Button from "./UI/Button";
export default function Caltulator() {
  const [initialInputValue, setInitialInputValue] = useState("");

  function handleClick(value) {
    setInitialInputValue((prevValue) => {
      return prevValue + value;
    });
  }

  function hanldeEqual() {
    setInitialInputValue((prevValue) => {
      return eval(prevValue);
    });
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="ml-5 mt-5 text-stone-50 w-[17rem] h-[20rem]  flex flex-col  items-center bg-stone-700 rounded-md ">
        <div className="mt-5">
          <input
            className="bg-stone-500 w-60 rounded-md h-9 pl-2 text-xl font-bold"
            type="text"
            value={initialInputValue}
            readOnly
          />
        </div>

        <div className="mr-5">
          <div className="mt-5 ">
            <Button onClick={() => handleClick("1")}>1</Button>
            <Button onClick={() => handleClick("2")}>2</Button>
            <Button onClick={() => handleClick("3")}>3</Button>
            <Button onClick={() => handleClick("+")}>+</Button>
          </div>
          <div className="mt-5 ">
            <Button onClick={() => handleClick("4")}>4</Button>
            <Button onClick={() => handleClick("5")}>5</Button>
            <Button onClick={() => handleClick("6")}>6</Button>
            <Button onClick={() => handleClick("-")}>-</Button>
          </div>
          <div className="mt-5 ">
            <Button onClick={() => handleClick("7")}>7</Button>
            <Button onClick={() => handleClick("8")}>8</Button>
            <Button onClick={() => handleClick("9")}>9</Button>
            <Button onClick={() => handleClick("*")}>*</Button>
          </div>
          <div className="mt-5 flex">
            <Button onClick={() => handleClick("0")}>0</Button>
            <Button onClick={hanldeEqual}>=</Button>
            <Button onClick={() => handleClick("/")}>/</Button>
            <Button onClick={() => handleClick("%")}>%</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
