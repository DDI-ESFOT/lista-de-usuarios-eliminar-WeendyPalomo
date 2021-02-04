/**
 * Created by chalosalvador on 4/2/21
 */
import { useState } from "react";

const Counter = () => {
  // const state = useState(5);
  // console.log("state", state);
  const [counter, setCounter] = useState(0);

  // const arr = [1, 2, 3, 4, 5];
  //
  // // const one = arr[0];
  // // const two = arr[1];
  // // const three = arr[2];
  // // const four = arr[3];
  // // const five = arr[4];
  //
  // const [one, two, three, four, five] = arr;
  //
  // console.log(one, two, three, four, five);

  console.log("render");

  const handleDecrement = () => {
    console.log("DECREMENT");
    // setCounter(counter - 1);
    setCounter((prevState) => {
      return prevState - 1;
    });
  };

  const handleIncrement = () => {
    console.log("INCREMENT");
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Contador</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{counter}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <div>
        <button onClick={handleReset}>Reiniciar</button>
      </div>
    </>
  );
};

export default Counter;
