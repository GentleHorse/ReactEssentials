import { useState } from "react";
import { CUSTOM_HOOKS } from "./data-custom-hook.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function CustomHooks() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{CUSTOM_HOOKS[selectedTopic].title}</h3>
        <p>{CUSTOM_HOOKS[selectedTopic].description}</p>
        <pre>
          <code>{CUSTOM_HOOKS[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Custom Hooks">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "withHttpRequests"}
              onClick={() => selectHandler("withHttpRequests")}
            >
              With HTTP requests
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "forUserInputManagement"}
              onClick={() => selectHandler("forUserInputManagement")}
            >
              For user input management
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}