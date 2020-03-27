import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  }

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  }

  return (
    <Counter
      // count={count}
      // onIncrease={onIncrease}
      // onDecrease={onDecrease}
      // onIncreaseBy={onIncreaseBy}
    />
  )
}

export default CounterContainer;

// 타입스크립트로 컨테이너 컴포넌트를 작성할ㄸㅐ 특별한점
// useSelector 부분에서 state의 타입을 RootState로 지정해서 사용한다는 것!

