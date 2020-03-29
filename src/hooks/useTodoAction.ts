// 할일의 상태를 토글하는 함수와 할일을 제거하는 함수를 제공하는 Hook
// 이 Hook은 함수의 파라미터로 할일의 id값을 받아옴.

import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleTodo, removeTodo } from '../modules/todos';

export default function useTodoActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id])
  const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id])

  return { onToggle, onRemove }
}