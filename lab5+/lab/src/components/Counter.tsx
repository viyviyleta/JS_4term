import React, { useState } from "react";
import Button from "./Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const countClass = count === 5 ? "count-text red" : "count-text";

  return (
    <div className="counter-container">
      <h1 className={countClass}>{count}</h1> {}
      <div className="buttons">
        <Button
          title="inc"
          onClick={() => setCount(count + 1)}
          disabled={count >= 5}
        />
        <Button title="reset" 
        onClick={() => setCount(0)} 
        disabled={count === 0} />
      </div>
    </div>
  );
};

export default Counter;
