import { useState } from "react";
import { CLASS_BASED_COMPONENTS } from "./data-class-based-components.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ClassBasedComponents() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{CLASS_BASED_COMPONENTS[selectedTopic].title}</h3>
        <p>{CLASS_BASED_COMPONENTS[selectedTopic].description}</p>
        <pre>
          <code>{CLASS_BASED_COMPONENTS[selectedTopic].code}</code>
        </pre>
        </TabContent>
    );
  }

  return (
    <Section title="Class based components">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "whatIsIt"}
              onClick={() => selectHandler("whatIsIt")}
            >
              What is it?
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "statesAndHandlers"}
              onClick={() => selectHandler("statesAndHandlers")}
            >
              States and handlers
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "sideEffects"}
              onClick={() => selectHandler("sideEffects")}
            >
              Side effects
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "contextAPI"}
              onClick={() => selectHandler("contextAPI")}
            >
              Context API
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "errorBoundary"}
              onClick={() => selectHandler("errorBoundary")}
            >
              Error boundary
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}