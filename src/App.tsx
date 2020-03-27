import React, {Fragment} from 'react';
// import CounterContainer from './containers/CounterContainer';
import Counter from './components/Counter';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    // <CounterContainer />
    <Fragment>
      <Counter />
      <TodoInsert />
      <TodoList />
    </Fragment>
  );
}

export default App;
