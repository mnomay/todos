import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h1 className="text-center mt-5">TODOs</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
