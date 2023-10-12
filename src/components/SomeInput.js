import { useState } from "react";

const SomeInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [wasNameInoutTouched, setWasNameInoutTouched] = useState(false);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputLostFocusHandler = (event) => {
    setWasNameInoutTouched(true);

    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setWasNameInoutTouched(true);

    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }

    setIsEnteredNameValid(true);

    setEnteredName("");
  }

  const isNameInputInvalid = !isEnteredNameValid && wasNameInoutTouched;

  const nameInputClasses = isNameInputInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputLostFocusHandler}
        />
        {isNameInputInvalid && <p className="error-text">First Name is required</p>}
      </div>
      <div className="form-actions">
        <button>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
