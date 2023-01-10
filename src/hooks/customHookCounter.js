import React from 'react';

const useCounter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const increaseBy = val => setCount(count + val);
    const decreaseBy = val => setCount(count + val);
    const reset = val => setCount(0);
    const setValue = e => setCount(parseInt(e.target.value));

    return { count, increment, decrement, increaseBy, decreaseBy, reset, setValue };
};

export default useCounter;
