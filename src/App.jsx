import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
import Setup from "./components/Setup/Setup.jsx";
import Section from "./components/utils/Section.jsx";
import NormalContent from "./components/utils/NormalContent.jsx";
import ListLink from "./components/utils/ListLink.jsx";
import MouseEvents from "./components/MouseEvents/MouseEvents.jsx";
import DragEvents from "./components/DragEvents/DragEvents.jsx";
import StateUseCases from "./components/StateUseCases/StateUseCases.jsx";
import PropsUseCases from "./components/PropsUseCases/PropsUseCases.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <Setup />
        <MouseEvents />
        <DragEvents />
        <StateUseCases />
        <PropsUseCases />
      </main>
    </>
  );
}

export default App;
