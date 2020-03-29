import { createAction, ActionType, createReducer } from 'typesafe-actions';


// Action type 
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// as const :  const Assertions라는 ts 문법.
// 이 문법을 사용하면 우리가 추후 액션 생성함수를 통해 액션 객체를 만들게 됐을때,
// type의 Typescript 타입이 "string"이 되지 않고, 실제값을 가르키게 된다.

// Action 생성 함수 선언
// export const increase = () => ({ type: INCREASE });
export const increase = createAction(INCREASE)();
// export const decrease = () => ({ type: DECREASE });
export const decrease = createAction(DECREASE)();
// export const increaseBy = (diff: number) => ({ 
//   type: INCREASE_BY,
//   payload: diff
// });
export const increaseBy = createAction(INCREASE_BY)<number>();

//diff를 diff라고 넣지 않고, payload라는 키값으로 바꿔주었는데, FSA규칙. 이라는 것이라고 함.
// 액션 객체의 구조를 일관성 있게 가져갈 수 있어서, 추후 리듀서에서 액션을 다룰때에 편하고,
// 읽기 쉽고, 액션에 관련된 라이브러리를 사용할 수도 있게 해준다. (but, 필수는 아님)

//액션객체들에 대한 type(타입스크립트 타입) 준비하기.
  // 액션 생성 함수들은 추후 컨테이너 컴포넌트에서 불러와서 사용을 해야하므로.
  // 나중에 우리가 리듀서를 작성할 때, 
  // action 파라미터의 타입을 설정하기 위해서 우리가 만든 모든 액션들의 타입스크립트 타입을 준비해주어야 한다.

// type CounterAction = 
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>; //를 typesafe-actions로 리팩토링중
const actions = { increase, decrease, increaseBy };
type CounterAction =ActionType<typeof actions>;

//ReturnType : 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입.


//counter 모듈에서 관리할 상태의 타입 && 초기값 선언하기
type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0
}

// 리덕스의 상태의 타입을 선언할 때에는 type을 써도 되고, interface를 써도 된대.

//리듀서
  // 함수의 반환타입에 상태의 타입을 꼭 넣기.
// function counter(state: CounterState = initialState, action: CounterAction){
//   switch(action.type){
//     case INCREASE:
//       return {count: state.count +1};
//     case DECREASE:
//       return {count: state.count -1};
//     case INCREASE_BY:
//       return {count: state.count + action.payload};
//     default:
//       return state;
//   }
// }
// 리듀서 typesafe-actions로 리팩토링하기.
// createReducer를 사용할때에는 generic으로 상태의 타입과 액션들의 타입을 넣어주어야 합니다.
// createReducer에서는 이를 사용하여 내부에 각각 액션들을 위하여 구현할 함수에서 타입을 추론한다.
// [방법1] 함수들로 이루어진 object map 형태로 리듀서 구현.
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count +1}),
  [DECREASE]: state => ({ count: state.count -1}),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload})
});
// [방법2] 메서드 체이닝 방식으로 리듀서 구현
// const counter = createReducer<CounterState, CounterAction>(initialState)
//   .handleAction(INCREASE, state => ({ count: state.count +1 }))
//   .handleAction(DECREASE, state => ({ count: state.count -1 }))
//   .handleActions(INCREASE_BY, (state, action) => ({ count: state.count + action.payload}))

export default counter;