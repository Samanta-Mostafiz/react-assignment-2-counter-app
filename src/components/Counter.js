/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const Counter = () => {
  const [count,setCount]=useState(0);
  const handleInc=()=>{
setCount(count+1);
  }
  const handleDec=()=>{
    setCount(count-1);
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleInc} disabled={count===5? true:false}>+</button>
          <button className="btn card__btn" onClick={handleDec} disabled={count===-5?true:false}>-</button>
          {/* <button className="btn card__btn">{count}</button> */}
        </div>
      </div>
    </div>
  );
};

export default Counter;
