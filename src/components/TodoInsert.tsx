// 새 항목을 등록할 수 있는 컴포넌트
// 인풋의 상태는 useState를 사용하여 로컬상태로 관리.


import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';

function TodoInsert() {

  const [value, setValue] = useState('');
  const addTodo = useAddTodo();
  console.log('value', value, 'addTodo', addTodo);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  } 

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: 커스텀 hook을 사용해서 새 항목 등록하기.
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  )
}

export default TodoInsert;