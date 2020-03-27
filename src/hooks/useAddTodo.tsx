// 이 hook은 새로운 할일을 등록하는 함수를 사용할 수 있게 해준다.

import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTodo } from '../modules/todos';


export default function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}

//TODO: 여기 이해안됨.