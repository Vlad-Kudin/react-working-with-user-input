import { useState } from "react";

const SomeInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [wasNameInoutTouched, setWasNameInoutTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && wasNameInoutTouched;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputLostFocusHandler = (event) => {
    setWasNameInoutTouched(true);
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setWasNameInoutTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    setEnteredName("");
    setWasNameInoutTouched(false);
  }

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
