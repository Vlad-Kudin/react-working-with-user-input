import useInput from "../hooks/use-input";

const SomeInput = () => {

  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isEnteredNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValues
  } = useInput(val => val.trim() !== "");

  const {
    value: enteredEmail,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues
  } = useInput(val => val.includes('@'));

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!isEnteredNameValid) {
      return;
    }

    resetNameInputValues();
    resetEmailInputValues();
  }

  const nameInputClasses = hasNameInputError ? "form-control invalid" : "form-control";
  const emailInputClasses = hasEmailInputError ? "form-control invalid" : "form-control";

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
        {hasNameInputError && <p className="error-text">First Name is required</p>}
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
        {hasEmailInputError && <p className="error-text">Email is required</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
