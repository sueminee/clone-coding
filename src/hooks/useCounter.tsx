import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import { useCallback } from 'react';

export default function useCounter(){
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  // const onIncrease = () => dispatch(increase());
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback((diff: number) => dispatch(increaseBy(diff)), [dispatch])
  
  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
  };
}

//Hooks가 존재하기 전에는, 컨테이너 컴포넌트를 만들때
//connect()함수를 통한 HOC패턴으로 컴포넌트와 리덕스를 연동해주었기 때문에
//props로 필요한 값들을 전달해주는 것이 필수였지만, Not anymore

