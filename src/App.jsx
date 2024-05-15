import { useState } from "react";

import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Setup from "./components/Setup/Setup.jsx";
import MouseEvents from "./components/MouseEvents/MouseEvents.jsx";
import DragEvents from "./components/DragEvents/DragEvents.jsx";
import StateUseCases from "./components/useState/UseStateUseCase.jsx";
import PropsUseCases from "./components/PropsUseCases/PropsUseCases.jsx";
import UseEffectUseCase from "./components/useEffect/UseEffectUseCase.jsx";
import BuiltInReactComponents from "./components/BuiltInReactComponents/BuiltInReactComponents.jsx";
import CSSStyling from "./components/CSSStyling/CSSStyling.jsx";
import StyledComponents from "./components/StyledComponents/StyledComponents.jsx";
import TailwindCSS from "./components/TailwindCSS/TailwindCSS.jsx";
import UseMemoUseCase from "./components/useMemo/UseMemoUseCase.jsx";
import UseRefUseCase from "./components/useRef/UseRefUseCase.jsx";
import SideBar from "./components/SideBar.jsx";
import ContextAPI from "./components/ContextAPI/ContextAPI.jsx";
import UseReducerUseCase from "./components/useReducer/UseReducerUseCase.jsx";
import UseCallbackUseCase from "./components/useCallback/UseCallbackUseCase.jsx";
import ReactTips from "./components/ReactTips/ReactTips.jsx";
import ThreeJsCanvas from "./components/ThreeJsComponents/ThreeJsCanvas.jsx";
import ClassBasedComponents from "./components/ClassBasedComponents/ClassBasedComponents.jsx";
import ErrorHandling from "./components/ErrorHandling/ErrorHandling.jsx";
import CustomHooks from "./components/CustomHooks/CustomHooks.jsx";
import FormsAndUserInputs from "./components/FormsAndUserInputs/FormsAndUserInputs.jsx";
import ResetUserInputs from "./components/ResetUserInputs/ResetUserInputs.jsx";
import InputValidation from "./components/InputValidation/InputValidation.jsx";
import ReduxIntro from "./components/ReduxIntro/ReduxIntro.jsx";
import ReduxWithReact01 from "./components/ReduxWithReact01/ReduxWithReact01.jsx";
import ReduxWithReact02 from "./components/ReduxWithReact02/ReduxWithReact02.jsx";
import ReduxToolkit from "./components/ReduxToolkit/ReduxToolkit.jsx";
import ReduxAdvanced from "./components/ReduxAdvanced/ReduxAdvanced.jsx";
import ReactRouter01 from "./components/ReactRouter01/ReactRouter01.jsx";
import ReactRouter02 from "./components/ReactRouter02/ReactRouter02.jsx";
import ReactRouter03 from "./components/ReactRouter03/ReactRouter03.jsx";
import ReactRouter04 from "./components/ReactRouter04/ReactRouter04.jsx";
import ReactRouter05 from "./components/ReactRouter05/ReactRouter05.jsx";
import ReactRouter06 from "./components/ReactRouter06/ReactRouter06.jsx";
import ReactRouter07 from "./components/ReactRouter07/ReactRouter07.jsx";

function App() {
  const [selectedContent, setSelectedContent] = useState("coreConcept");

  const selectContentHandler = (selected) => {
    setSelectedContent(selected);
  };

  let content;

  switch (selectedContent) {
    case "coreConcept":
      content = <CoreConcepts />;
      break;

    case "setup":
      content = <Setup />;
      break;

    case "useEffect":
      content = <UseEffectUseCase />;
      break;

    case "useCallback":
      content = <UseCallbackUseCase />;
      break;

    case "useRef":
      content = <UseRefUseCase />;
      break;

    case "useState":
      content = <StateUseCases />;
      break;

    case "props":
      content = <PropsUseCases />;
      break;

    case "contextAPI":
      content = <ContextAPI />;
      break;

    case "useReducer":
      content = <UseReducerUseCase />;
      break;

    case "useMemo":
      content = <UseMemoUseCase />;
      break;

    case "builtInReactComponents":
      content = <BuiltInReactComponents />;
      break;

    case "CSSStyling":
      content = <CSSStyling />;
      break;

    case "styledComponents":
      content = <StyledComponents />;
      break;

    case "tailwindCSS":
      content = <TailwindCSS />;
      break;

    case "mouseEvents":
      content = <MouseEvents />;
      break;

    case "dragEvents":
      content = <DragEvents />;
      break;

    case "TIPS":
      content = <ReactTips />;
      break;

    case "classBasedComponents":
      content = <ClassBasedComponents />;
      break;

    case "errorHandling":
      content = <ErrorHandling />;
      break;

    case "customHooks":
      content = <CustomHooks />;
      break;

    case "formsAndUserInputs":
      content = <FormsAndUserInputs />;
      break;

    case "resetUserInputs":
      content = <ResetUserInputs />;
      break;

    case "inputValidation":
      content = <InputValidation />;
      break;

    case "reduxIntro":
      content = <ReduxIntro />;
      break;

    case "reduxWithReact01":
      content = <ReduxWithReact01 />;
      break;

    case "reduxWithReact02":
      content = <ReduxWithReact02 />;
      break;

    case "reduxToolkit":
      content = <ReduxToolkit />;
      break;

    case "reduxAdvanced":
      content = <ReduxAdvanced />;
      break;

    case "reactRouter01":
      content = <ReactRouter01 />;
      break;

    case "reactRouter02":
      content = <ReactRouter02 />;
      break;

    case "reactRouter03":
      content = <ReactRouter03 />;
      break;

    case "reactRouter04":
      content = <ReactRouter04 />;
      break;

    case "reactRouter05":
      content = <ReactRouter05 />;
      break;

    case "reactRouter06":
      content = <ReactRouter06 />;
      break;

    case "reactRouter07":
      content = <ReactRouter07 />;
      break;

    default:
      content = <p>Oops... no content selected ???</p>;
  }

  return (
    <>
      <ThreeJsCanvas />

      <main>
        <SideBar
          onSelect={selectContentHandler}
          selectedContent={selectedContent}
        />
        <div className="tab-content">
          <div id="content">{content}</div>
        </div>
      </main>
    </>
  );
}

export default App;
