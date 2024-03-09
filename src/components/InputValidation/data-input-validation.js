export const INPUT_VALIDATION = {
    everyKeyStroke: {
      title: "Validate on every keystroke",
      description: "If you want to validate every keystroke, you need to use useState() for managing user input. In the below example, an error message shows right after a user type a letter in the input box (= right after the user input is not null).",
      code: `
const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
    });

// Validation
const emailIsInvalid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

....

// Two-way binding
function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
    ...prevValues,
    [identifier]: value,
    }));
}

return (
    <form onSubmit={handleSubmit}>
        ....

        <div ....>
            <div ....>
                <label ....> .... </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={(event) => handleInputChange("email", event.target.value)}
                    value={enteredValues.email}
                />
                <div .... >
                    {emailIsInvalid && <p>Please enter a valid email address.</p>}
                </div>
            </div>
            
            ....    
`,
    },
  
    lostFocus: {
      title: "Validate on lost focus",
      description:
        "If you want to validate once the input loses focus, you need to use onBlur event listener. And for better user experience, you can combine with keystroke validation (in below example, it's done via 'didEdit' state management). ",
      code: `
// State - entered values in the inputs
const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
});

// State - focus or lose focus
const [didEdit, setDidEdit] = useState({
email: false,
password: false,
});

// Validation - lose focus
const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

....

// Handler - listen input change + reset 'lose focus' state
function handleInputChange(identifier, value) {
setEnteredValues((prevValues) => ({
    ...prevValues,
    [identifier]: value,
}));

setDidEdit(prevDidEdit => ({
    ...prevDidEdit,
    [identifier]: false,
}))
}

// Handler - change 'lose focus' state
function handleInputBlur(identifier) {
setDidEdit((prevDidEdit) => ({
    ...prevDidEdit,
    [identifier]: true,
}));
}

return (
    <form .... >
        ....

        <div .... >
            <div .... >
                <label .... > .... </label>
                <input
                id="email"
                type="email"
                name="email"
                onBlur={() => handleInputBlur("email")}
                onChange={(event) => handleInputChange("email", event.target.value)}
                value={enteredValues.email}
                />
                <div .... >
                    {emailIsInvalid && <p>Please enter a valid email address.</p>}
                </div>
            </div>

            ....
`,
    },
  
    submit: {
      title: "Validate on submit",
      description:
        "You can validate input data on submitting a form by using useRef().",
      code: `
// State - valid input or not
const [emailIsInvalid, setEmailIsInvalid] = useState(false);

// Ref - managing the inputs
const emailRef = useRef();
const passwordRef = useRef();

// Handler - submit + validation
function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
    setEmailIsInvalid(true);  // The email input is invalid

    // Prevent to execute following codes
    return;
    }

    // If the email input is valid
    // change the state for disappearing the error message 
    setEmailIsInvalid(false);
}

return (
    <form .... >
        ....

        <div .... >
            <div .... >
                <label .... > .... </label>
                <input id="email" type="email" name="email" ref={emailRef} />
                <div .... >
                    {emailIsInvalid && <p>Please enter a valid email address.</p>}
                </div>
            </div>
        
        ....
`,
    },
  };
  