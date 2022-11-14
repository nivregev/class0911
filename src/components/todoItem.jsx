import { createContext } from "react";

const TodoItem = ({
  theTodoThatAddedOnClick,
  createdTime,
  isDone,
  id,
  onIsDoneChanged,
  onRemoveTodoItem,
}) => {
  return (
    <div className=" d-flex justify-content-center">
      <li className="list-group-item d-flex justify-content-between w-75">
        <div>
          <input
            className="form-check-input mx-1"
            type="checkbox"
            checked={isDone}
            onChange={onIsDoneChanged}
            id={id}
          />
          <span className="mx-2">{createdTime.toLocaleTimeString()} </span>
          <span className="mx-2">{theTodoThatAddedOnClick}</span>
        </div>
        <div className="mx-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={onRemoveTodoItem}
          >
            X
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
