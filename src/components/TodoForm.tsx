import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const TodoForm: React.FC = () => {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo.trim() === '') {
      setError('TODO item cannot be empty.');
      return;
    }

    // Clear error if input is valid
    setError(null);

    // Dispatch addTodo action
    dispatch(addTodo(todo));

    // Clear the input field
    setTodo('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className={`form-control ${error ? 'is-invalid' : ''}`}
            placeholder="Add a new todo"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
        {error && <div className="invalid-feedback d-block">{error}</div>}
      </form>
    </>
  );
};

export default TodoForm;
