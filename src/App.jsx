import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Setup from "./components/Setup/Setup.jsx";
import MouseEvents from "./components/MouseEvents/MouseEvents.jsx";
import DragEvents from "./components/DragEvents/DragEvents.jsx";
import StateUseCases from "./components/useState/StateUseCases.jsx";
import PropsUseCases from "./components/PropsUseCases/PropsUseCases.jsx";
import UseEffectUseCase from "./components/useEffect/UseEffectUseCase.jsx";
import BuiltInReactComponents from "./components/BuiltInReactComponents/BuiltInReactComponents.jsx";
import CSSStyling from "./components/CSSStyling/CSSStyling.jsx";
import StyledComponents from "./components/StyledComponents/StyledComponents.jsx";
import TailwindCSS from "./components/TailwindCSS/TailwindCSS.jsx";
import UseMemoUseCase from "./components/useMemo/UseMemoUseCase.jsx";
import UseRefUseCase from "./components/useRef/UseRefUseCase.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Setup />
        <UseEffectUseCase />
        <UseRefUseCase />
        <StateUseCases />
        <PropsUseCases />
        <UseMemoUseCase />
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
