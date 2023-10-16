import useInput from "../hooks/use-input";

const isInputEmpty = (val) => val.trim() !== "";
const isEmailValid = (val) => val.includes('@');

const SomeForm = () => {

  const {
    value: enteredFirstName,
    hasError: hasFirstNameInputError,
    isValid: isEnteredFirstNameValid,
    inputChangeHandler: firstNameInputChangeHandler,
    inputLostFocusHandler: firstNameInputLostFocusHandler,
    resetValues: resetFirstNameInputValue
  } = useInput(isInputEmpty);

  const {
    value: enteredLastName,
    hasError: hasLastNameInputError,
    isValid: isEnteredLastNameValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputLostFocusHandler: lastNameInputLostFocusHandler,
    resetValues: resetLastNameInputValue
  } = useInput(isInputEmpty);

  const {
    value: enteredEmail,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValue
  } = useInput(isEmailValid);

  let isFormValid = false;

  if (isEnteredFirstNameValid && isEnteredLastNameValid && isEnteredEmailValid) {
    isFormValid = true;
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!isEnteredFirstNameValid || !isEnteredLastNameValid || !isEnteredEmailValid) {
      return;
    }

    resetFirstNameInputValue();
    resetLastNameInputValue();
    resetEmailInputValue();
  }

  const firstNameInputClasses = hasFirstNameInputError ? "form-control invalid" : "form-control";
  const lastNameInputClasses = hasLastNameInputError ? "form-control invalid" : "form-control";
  const emailInputClasses = hasEmailInputError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameInputChangeHandler}
            value={enteredFirstName}
            onBlur={firstNameInputLostFocusHandler}
          />
          {hasLastNameInputError && <p className="error-text">First Name is required</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameInputChangeHandler}
            value={enteredLastName}
            onBlur={lastNameInputLostFocusHandler}
          />
          {hasLastNameInputError && <p className="error-text">Last Name is required</p>}
        </div>
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

export default SomeForm;
