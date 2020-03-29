import React from 'react';
// import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos'

function TodoList() {
  // const todos: Todo[] = []; // 커스텀 hook 사용하여 조회하기.
  const todos = useTodos();
  // console.log('todos가 뭐냐', todos);

  if(todos.length === 0) return <p>등록된 항목이 없습니다.</p>

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
        />
      ))}
    </ul>
  )
}

export default TodoList;
