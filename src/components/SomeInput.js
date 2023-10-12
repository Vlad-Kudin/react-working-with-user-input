import { useState } from "react";

const SomeInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }

    setIsEnteredNameValid(true);

    setEnteredName("");
  }

  const nameInputClasses = isEnteredNameValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} value={enteredName} />
        {!isEnteredNameValid && <p className="error-text">First Name is required</p>}
      </div>
      <div className="form-actions">
        <button>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
