// todo item 하나 의 정보를 보여주는 컴포넌트
// 텍스트영역을 클릭하면 done 값이 토글된다.
// 우측의 x 버튼을 클릭하면 삭제된다.

import React from 'react';
import './TodoItem.css';
import { Todo } from '../modules/todos'; // 타입
import useTodoActions from '../hooks/useTodoAction';

// TODO: 
// console.log("import { Todo } from '../modules/todos'로 불러온 Todo 너의 정체가 모ㄴㅑ", Todo);
//'Todo' only refers to a type, but is being used as a value here.


export type TodoItemProps = {
  todo: Todo;
}

function TodoItem({ todo } : TodoItemProps) {
  // TODO: 커스텀 hook을 사용해서, onToggle / onRemove  구현하기
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return(
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>{todo.text}</span>
      <span className="remove" onClick={onRemove}>( X )</span>
    </li>
  )
}

export default TodoItem;