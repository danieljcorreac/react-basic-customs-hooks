import { useState } from 'react';

const useCounter = (initialState = 10) => {
  
    const [count, setCount] = useState(initialState);

    const increment = (factor = 1) => setCount(count + factor);
    const decrement = (factor = 1) => setCount(count - factor);
    const reset = () => setCount(initialState);
    
    return { count, increment, decrement, reset };
}

export default useCounter;