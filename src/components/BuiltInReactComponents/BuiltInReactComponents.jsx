import { useState } from "react";
import { BUILT_IN_REACT_COMPONENTS } from "../../data";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function BuiltInReactComponents() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{BUILT_IN_REACT_COMPONENTS[selectedTopic].title}</h3>
        <p>{BUILT_IN_REACT_COMPONENTS[selectedTopic].description}</p>
        <pre>
          <code>{BUILT_IN_REACT_COMPONENTS[selectedTopic].code}</code>
        </pre>
        </TabContent>
    );
  }

  return (
    <Section title="Built-in React Components" id="built-in-react-components">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "suspense"}
              onClick={() => selectHandler("suspense")}
            >
              Suspense
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "strictMode"}
              onClick={() => selectHandler("strictMode")}
            >
              StrictMode
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}