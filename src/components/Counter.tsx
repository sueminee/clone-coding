import React from 'react';
//2 hook을 쓰는방법으로 바꾸기
import useCounter from '../hooks/useCounter';

//2 hook을 쓰는방법으로 바꾸기
// type CounterProps = {
//   count: number;
//   onIncrease: () => void;
//   onDecrease: () => void;
//   onIncreaseBy: (diff: number) => void;
// }

// function Counter({
//   count,
//   onIncrease,
//   onDecrease,
//   onIncreaseBy
// }: CounterProps) {
function Counter() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();
  // 이렇게 하면, 필요한 함수와 값을 props로 받아오는게 아니라,
  // "useCounter" Hook을 통해서 받아왔다. 
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={()=> onIncreaseBy(5)}>+5</button>
    </div>
  )
}

export default Counter;