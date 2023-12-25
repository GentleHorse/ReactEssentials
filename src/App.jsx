import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
import Setup from "./components/Setup/Setup.jsx";
import MouseEvents from "./components/MouseEvents/MouseEvents.jsx";
import DragEvents from "./components/DragEvents/DragEvents.jsx";
import StateUseCases from "./components/StateUseCases/StateUseCases.jsx";
import PropsUseCases from "./components/PropsUseCases/PropsUseCases.jsx";
import ReactHooks from "./components/ReactHooks/ReactHooks.jsx";
import BuiltInReactComponents from "./components/BuiltInReactComponents/BuiltInReactComponents.jsx";
import CSSStyling from "./components/CSSStyling/CSSStyling.jsx";
import StyledComponents from "./components/StyledComponents/StyledComponents.jsx";
import TailwindCSS from "./components/TailwindCSS/TailwindCSS.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <Setup />
        <ReactHooks />
        <StateUseCases />
        <PropsUseCases />
        <BuiltInReactComponents />
        <CSSStyling />
        <StyledComponents />
        <TailwindCSS />
        <MouseEvents />
        <DragEvents />
      </main>
    </>
  );
}

export default App;
