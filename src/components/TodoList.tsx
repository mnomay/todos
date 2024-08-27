import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeTodo } from '../features/todo/todoSlice';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const sortedTodos = useMemo(() => {
    return todos.concat().sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }, [todos]);

  return (
    <ul className="list-group">
      {sortedTodos.map((todo) => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
          {todo.title}
          <button onClick={() => dispatch(removeTodo(todo.id))} className="btn btn-danger btn-sm">
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
