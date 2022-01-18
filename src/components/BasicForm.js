import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(value => value.trim() !== '');
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(value => value.trim() !== '');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));


  let formIsValid = false


  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }


  const formSubmissionHandler = event => {
    event.preventDefault()

    if (!formIsValid) {
      return;
    }
    console.log('submitted!')
    resetLastNameInput()
    resetEmailInput()
    resetFirstNameInput()
  }
  const firstNamenputClasses = firstInputHasError ? 'form-control invalid' : 'form-control ';
  const lastNameInputClasses = lastInputHasError ? 'form-control invalid' : 'form-control ';
  const emalInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control ';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNamenputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstInputHasError && <p>Please enter a first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastInputHasError && <p>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emalInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p>Please enter a email.</p>}
      </div>
      <div className='form-actions'>
        <button disablet={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
