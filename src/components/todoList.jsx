import TodoItem from "./todoItem";

const TodoList = ({ todos, isDoneChanged, removeTodoItem }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            onIsDoneChanged={() => isDoneChanged(todo.id)}
            onRemoveTodoItem={() => removeTodoItem(todo.id)}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
