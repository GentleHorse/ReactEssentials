export const INPUT_VALIDATION = {
  everyKeyStroke: {
    title: "Validate on every keystroke",
    description:
      "If you want to validate every keystroke, you need to use useState() for managing user input. In the below example, an error message shows right after a user type a letter in the input box (= right after the user input is not null).",
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
  builtInProps: {
    title: "Validate via built-in props",
    description: "For user input validations, you can use built-in validation props. You can put ‘required’ attribute to <input> tag and other input field tag such as <select> tag. About password validation, you can also set minmum length by adding 'minLength' attribute. ",
    code: `
<input id="email" type="email" name="email" required />

<input id="password" type="password" name="password" required minLength={8} />

<input type="text" id="first-name" name="first-name" required />

<input type="text" id="last-name" name="last-name" required />

<select id="role" name="role" required>
    <option value="student">Student</option>
    <option value="teacher">Teacher</option>
    <option value="employee">Employee</option>
    <option value="founder">Founder</option>
    <option value="other">Other</option>
</select>

<input type="checkbox" id="terms-and-conditions" name="terms" required />
  `,
  },
  passwordMatchLogic: {
    title: "Password match logic",
    description: "Password-match check It's quite normal to ask users to put passwords twice for confirmation, and show a message if two of them don't match with each other. Here's one example of that logic.",
    code: `
const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);

function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition"); // Get multi selection input
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel; // Merge multi selection input

    /**
     *
     * PASSWORD MATCH LOGIC
     *
     * You can access specific data via "name" attribute
     * "data.confirm-password" is not valid form
     * thus, use data[confirm-password] instead
     *
     */
    if (data.password !== data[confirm - password]) {
        setPasswordAreNotEqual(true);
        return;
    }

    // If inputs are valid, go to the next action
    console.log(data);
}

return (
    <form .... >
        ....

        <div .... >
            <div .... >
                <label .... >Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    minLength={8}
                />
            </div>

            <div .... >
                <label .... >Confirm Password</label>
                <input
                    id="confirm-password"
                    type="password"
                    name="confirm-password"
                    required
                />
            <div .... >
                {passwordAreNotEqual && <p>Password must match.</p>}
            </div>
            </div>
        </div>

        ....
  `,
  },
};
