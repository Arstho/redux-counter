import React from "react";
import { useDispatch } from "react-redux"


const Buttons = () => {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch({ type: 'plus'});
  };

  const handleMinus = () => {
    dispatch({ type: 'minus'});
  };

  const handlePlusRand = () => {
    const randomNumber = Math.floor(Math.random() *100)
    dispatch({ type: '+rand', payload: randomNumber });
  };

  const handleRMinusand = () => {
    const randomNumber = Math.floor(Math.random() *100)
    dispatch({ type: '-rand', payload: randomNumber });
  };
  return(
    <div>
      <button onClick={handleRMinusand}>-rand</button>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlusRand}>+rand</button>
    </div>
  )
}

export default Buttons;