import { useState } from "react";
import { BUILT_IN_REACT_COMPONENTS } from "../../data";
import TabButton from "../utils/TabButton";
import Section from "../utils/Section";
import Tabs from "../utils/Tabs";

export default function BuiltInReactComponents() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{BUILT_IN_REACT_COMPONENTS[selectedTopic].title}</h3>
        <p>{BUILT_IN_REACT_COMPONENTS[selectedTopic].description}</p>
        <pre>
          <code>{BUILT_IN_REACT_COMPONENTS[selectedTopic].code}</code>
        </pre>
      </div>
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