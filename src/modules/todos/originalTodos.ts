import { createAction, ActionType, createReducer } from 'typesafe-actions';
// createStandardAction 없어짐 대신 createAction 사용.

//1. Action type
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';



//액션생성함수
// export const addTodo = (text: string) => ({
//   type: ADD_TODO,
//   payload: text
// });

// export const toggleTodo = (id: number) =>({
//   type: TOGGLE_TODO,
//   payload: id
// });

// export const removeTodo = (id: number) => ({
//   type: REMOVE_TODO,
//   payload: id
// })
//typesafe-actions로 리팩토링
export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

//액션의 ts타입 선언
// type TodosAction =
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof toggleTodo>
//   | ReturnType<typeof removeTodo>;
//typesafe-actions로 리팩토링
const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;


// 상태를 위한 타입 선언
// 'Todo' only refers to a type, 
export type Todo = {
  id: number;
  text: string;
  done: boolean;
}
type TodosState = Todo[];

// 초기값 설정
const initialState: TodosState = [
  {id: 1, text: '타입스크립트 배우기', done: true},
  {id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true},
  {id: 3, text: '투두리스트 만들기', done: false}
];

//리듀서 구현하기
// function todos(state: TodosState = initialState, action: TodosAction): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       const nextId = Math.max(...state.map(todo => todo.id)) + 1;
//       // 현재 상태의 모든 항목들의 id를 체크해서, 그중 가장 큰값 +1 한 값이 새 id가 된다.
//       return state.concat({
//         id: nextId,
//         text: action.payload,
//         done: false
//       });
//     case TOGGLE_TODO:
//       return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo);
//       // 클릭된 id의 todo는 done의 상태가 토글되고, 클릭된 id가 아닌애들(나머지)은 원래 그대로.
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.payload);
//       // remove하는 id 가 아닌 애들만, TodosState가 된다.
//     default:
//       return state;
//   }
// }
//typesafe-actions로 리팩토링
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, {payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) +1,
      text,
      done: false
    }),
    [TOGGLE_TODO]: (state, {payload: id}) => state.map(todo => (todo.id === id ? {...todo, done:!todo.done} : todo)),
    [REMOVE_TODO]: (state, {payload: id}) => state.filter(todo => todo.id !== id)
})

export default todos;