import { useState } from "react";

type UseCounterProps = {
  initialCount?: number;
};

const useCounter = ({ initialCount = 0 }: UseCounterProps) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () => setCount((prevCount) => prevCount - 1);

  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;
