export const RESET_USER_INPUTS = {
  builtInReset: {
    title: "Built-in reset form logic",
    description:
      "If you set 'type' attribute of <button> inside <form> tag to 'reset', it enables to clear user inputs by clicking.",
    code: `
<form onSubmit={handleSubmit}>

    ....
    
    <p ....>
        <button type="reset" ..... >
            Reset
        </button>
        <button type="submit" .....>
            Sign up
        </button>
    </p>
    
</form>
    `,
  },
  useStateReset: {
    title: "useState() reset form logic",
    description:
      "If you manage user inputs with useState(), you can reset by providing states with the initial values.",
    code: `
function handleSubmit(event) {
    event.preventDefault();

    ....

    setEnteredValues({
        email: "",        // Clear out email input
        password: "",     // Clear out password input
    })
}
    `,
  },
  useRefReset: {
    title: "useRef() reset form logic",
    description:
      "If you manage user inputs with useRef(), you can reset by setting null values.",
    code: `
function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    ....

    emailRef.current.value = "";         // Clear out email input
    passwordRef.current.value = "";      // Clear out password input
}
      `,
  },
  formDataReset: {
    title: "FormData reset form logic",
    description:
      "If you manage user inputs with FormData, you can reset by reset() method.",
    code: `
function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");  // Get multi selection input
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel; // Merge multi selection input

    ....

    event.target.reset();    // Clear out inputs
}
      `,
  },
};
