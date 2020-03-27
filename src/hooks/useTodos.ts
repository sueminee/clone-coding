import {useSelector} from 'react-redux';
import {RootState} from '../modules';

export default function useTodos(){
  const todos = useSelector((state: RootState) => state.todos);
  // useSelector를 사용해서 상태 (todos) 를 조회함
  return todos;
}