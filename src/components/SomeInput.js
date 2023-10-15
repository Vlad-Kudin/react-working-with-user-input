import { useState } from "react";

const SomeInput = () => {

  const [enteredName, setEnteredName] = useState('');
  const [wasNameInputTouched, setWasNameInoutTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [wasEmailInputTouched, setWasEmailInoutTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const isEnteredEmailValid = enteredEmail.includes('@');
  const isEmailInputInvalid = !isEnteredEmailValid && wasEmailInputTouched;

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  };

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputLostFocusHandler = () => {
    setWasNameInoutTouched(true);
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const emailInputLostFocusHandler = () => {
    setWasEmailInoutTouched(true);
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setWasNameInoutTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    setEnteredName("");
    setWasNameInoutTouched(false);

    setEnteredEmail("");
    setWasEmailInoutTouched(false);
  }

  const nameInputClasses = isNameInputInvalid ? "form-control invalid" : "form-control";
  const emailInputClasses = isEmailInputInvalid ? "form-control invalid" : "form-control";

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
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputLostFocusHandler}
        />
        {isEmailInputInvalid && <p className="error-text">Email is required</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
