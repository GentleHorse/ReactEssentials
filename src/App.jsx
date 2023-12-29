import { useState } from "react";

import Header from "./components/Header/Header.jsx";
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

    default:
      content = <p>Oops... no content selected ???</p>;
  }

  return (
    <>
      <Header />
      <main>
        <SideBar onSelect={selectContentHandler} />
        <div id="content">{content}</div>
      </main>
    </>
  );
}

export default App;
