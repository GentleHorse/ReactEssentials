export const FORMS_USER_INPUTS = {
  preventDefaultBehaviour: {
    title: "Prevent default form submission behaviour",
    description:
      "As default in browser, whichever button is clicked inside <form> tag, a HTTP request is automatically sent to the server. Default type of buttons in <form> tag is 'submit', which means, it triggers reloading a page. To prevent page reload, add 'onSubmit' attribute to <form> tag and use 'event.preventDefault()' in the linked handler.",
    code: `
function handleSubmit(event) {
    event.preventDefault();
}

return (
    <form onSubmit={handleSubmit}>
            
        ....
            
    </form>
  `,
  },
  oneStateOneHandler: {
    title: "One state and one generic handler for user inputs",
    description:
      "The more user input are, the more states and handlers are required, which is not ideal for maintaining codes. Thus, it's better to use minimum state managements and handlers, and here's one example.",
    code: `
const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
});

....

function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
        ...prevValues,
        [identifier]: value,
    }));
}

return (
    <form onSubmit={handleSubmit}>

            ....

        <div className="control-row">
            <div className="control no-margin">
                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="email"
                name="email"
                onChange={(event) => handleInputChange("email", event.target.value)}
                value={enteredValues.email}
                />
            </div>

            <div className="control no-margin">
                <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                name="password"
                onChange={(event) =>
                    handleInputChange("password", event.target.value)
                }
                value={enteredValues.password}
                />
            </div>
        </div>

            ....
            
    </form>
  `,
  },
  oneRefOneHandler: {
    title: "useRef for user inputs",
    description:
      "For handling user inputs, one alternative way of two way binding (one state + one generic handler) is using useRef() to create links to input values. ",
    code: `
const emailRef = useRef();
const passwordRef = useRef();

function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log(enteredEmail, enteredPassword);
}

return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
            <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input 
                id="email" 
                type="email" 
                name="email" 
                ref={emailRef}
                />
            </div>

            <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                name="password"
                ref={passwordRef}
            />
            </div>
        </div>

        <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
        </p>
    </form>
    `,
  },
  formDataObject: {
    title: "FormData object for user inputs",
    description:
      "In order to collect user input data, you could use useState() or useRef() for managing it, but it's still cumbersome. A better way is to use “FormData” object. It collects and wraps all user input values inside <form> tag. Be aware, if you want to gather user inputs correctly, you must put “name” attribute to every <input> tag, <select> tag or other input fields. You can withdraw user inputs with Object.fromEntries(fd.entries()).",
    code: `
function handleSubmit(event) {
    event.preventDefault();
    
    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");  // Get multi selection input
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel; // Merge multi selection input
    
    console.log(data);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            
            ....
        
            <div>
                ....
                <input .... name="email" />
            </div>
        
            <div>
            <div>
                ....
                <input .... name="password" />
            </div>
        
            <div>
                ....
                <input .... name="confirm-password" />
            </div>
            </div>
        
            ....
        
            <div>
            <div>
                ....
                <input .... name="first-name" />
            </div>
        
            <div>
                ....
                <input .... name="last-name" />
            </div>
            </div>
        
            <div>
                ....
                <select .... name="role">
                    <option> .... </option>
                    <option> .... </option>
                    <option> .... </option>
                    <option> .... </option>
                    <option> .... </option>
                </select>
            </div>
        
            <fieldset>
                ....
                <div>
                    <input .... name="acquisition" />
                    <label htmlFor="a"> .... </label>
                </div>
            
                <div>
                    <input .... name="acquisition" />
                    <label htmlFor="b"> .... </label>
                </div>
                
                <div>
                    <input .... name="acquisition" />
                    <label htmlFor="c"> .... </label>
                </div>
            
            </fieldset>
        
            ....
            
        </form>
    );
    `,
  },
};
