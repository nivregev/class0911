import React from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { v4 as uuid } from "uuid";

import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const HandleTodosOnSubmit = (theTodoThatAddedOnClick) => {
    setTodos((todos) => [
      ...todos,
      {
        id: uuid(),
        theTodoThatAddedOnClick,
        isDone: false,
        createdTime: new Date(),
      },
    ]);
  };

  const handleIsDoneChanged = (id, isDone) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: typeof isDone === "boolean" ? isDone : !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const handleRemoveTodoItem = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm onSubmit={HandleTodosOnSubmit} />
      <TodoList
        todos={todos}
        isDoneChanged={handleIsDoneChanged}
        removeTodoItem={handleRemoveTodoItem}
      />
    </div>
  );
};

export default Todo;
