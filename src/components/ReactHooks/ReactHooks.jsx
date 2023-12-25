import { useState } from "react";
import { REACT_HOOKS } from "../../data";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactHooks() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_HOOKS[selectedTopic].title}</h3>
        <p>{REACT_HOOKS[selectedTopic].description}</p>
        <pre>
          <code>{REACT_HOOKS[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="React Hooks" id="react-hooks">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "useState"}
              onClick={() => selectHandler("useState")}
            >
              useState
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useEffectA"}
              onClick={() => selectHandler("useEffectA")}
            >
              UseEffect A
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useEffectB"}
              onClick={() => selectHandler("useEffectB")}
            >
              useEffect B
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useEffectC"}
              onClick={() => selectHandler("useEffectC")}
            >
              useEffect C
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useEffectD"}
              onClick={() => selectHandler("useEffectD")}
            >
              useEffect D
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useMemo"}
              onClick={() => selectHandler("useMemo")}
            >
              useMemo
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useRef"}
              onClick={() => selectHandler("useRef")}
            >
              useRef
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
