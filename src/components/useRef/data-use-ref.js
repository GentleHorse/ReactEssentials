export const USE_REF = {
  useCaseA: {
    title: "Use case A",
    description:
      "It lets you reference a value that's not needed for rendering. You can access DOM element ONLY AFTER JSX is rendered (more precisely, the ref connection is created at the second render time), that's why playing inside useEffect (the initial render).",
    code: `
const buttonRef = useRef();

useEffect(() => {
  buttonRef.current.style.backgroundColor = 'papayawhip';
  buttonRef.current.style.color = 'salmon';

  return () => {
    localStorage.removeItem(keyName);
  };
}, []);

...

return (
  ...
    <button ref={buttonRef} onClick={buttonClick}>
      Click me
    </button>
  ...
);
`,
  },
  useCaseB: {
    title: "Use case B",
    description:
      "useRef doesn't call re-render the component, so it's good to control the value which doesn't need to be rendered such as starting and stopping a timer.",
    code: `
const timer = useRef();

const [timerStarted, setTimerStarted] = useState(false);
const [timerExpired, setTimerExpired] = useState(false);

const startHandler = () => {
  setTimerStarted(true);

  timer.current = setTimeout(() => {
    setTimerExpired(true);
  }, targetTime * 1000);
};

const stopHandler = () => {
  clearTimeout(timer.current);
};

...

<button
className={challengeButtonClasses}
onClick={timerStarted ? stopHandler : startHandler}
>
{timerStarted ? "Stop" : "Start"} Chanllenge
</button>
`,
  },
  forwardingRef: {
    title: "Forwarding ref",
    description:
      "Call forwardRef() to let your component receive a ref and forward it to a child component.",
    code: `
--->> Parent component <<----------------------------------------------

const dialog = useRef();

...

return (
  <>
    <ResultModal ref={dialog} result="lost" targetTime={targetTime} />


--->> Child component <<----------------------------------------------

import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(props, ref) {
  return (
    <dialog ref={ref}>
			
			...
			
    </dialog>
  );
})

export default ResultModal;
`,
  },
  exposingfunction: {
    title: "Exposing function",
    description:
      "Creating and exposing a function which can be called from a parent component.",
    code: `
--->> Parent component <<----------------------------------------------

const dialog = useRef();

...

dialog.current.open();

...

return (
  <>
    <ResultModal ref={dialog} result="lost" targetTime={targetTime} />


--->> Child component <<----------------------------------------------

import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime },ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} id="result-modal" className={resultModalClasses}>
		
     ...      

    </dialog>
  );
});

export default ResultModal;
`,
  },
  createPortal: {
    title: "Create a portal",
    description:
      "To create a portal, call createPortal, passing some JSX, and the DOM node where it should be rendered.",
    code: `
--->> index.html <<----------------------------------------------------

<body>
  <div id="modal"></div>
  <div id="content">
    <div id="root"></div>
  </div>
  <script type="module" src="/src/main.jsx"></script>
</body>


--->> SomeComponent.jsx <<----------------------------------------------

import { createPortal } from "react-dom";

return createPortal(
    <dialog>

     ....

    </dialog>,

    document.getElementById("modal")
  );
`,
  },
};
