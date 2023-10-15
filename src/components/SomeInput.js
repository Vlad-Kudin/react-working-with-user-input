import { useState } from "react";

const SomeInput = () => {

  const [enteredName, setEnteredName] = useState('');
  const [wasNameInoutTouched, setWasNameInoutTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && wasNameInoutTouched;
  let isFormValid = false;

  if (isEnteredNameValid) {
    isFormValid = true;
  };

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputLostFocusHandler = () => {
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
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
