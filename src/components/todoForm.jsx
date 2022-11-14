import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [input, setInputChange] = useState("");

  const handleInputChange = (e) => setInputChange(e.target.value);
  const handleClearInput = () => setInputChange("");
  const handleOnSubmit = () => {
    onSubmit(input);
    handleClearInput();
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="input-group mb-3 col-6 ">
          <span className="input-group-text">Mission Todo:</span>
          <input
            type="text"
            className="form-control"
            placeholder="..."
            onChange={handleInputChange}
            value={input}
          />
          <div className="col-6">
            <button onClick={handleOnSubmit} className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
