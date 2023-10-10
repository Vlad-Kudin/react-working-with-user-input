import { useState } from "react";

const SomeInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  };
  const formSubmitHandler = event => {
    event.preventDefault();
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
