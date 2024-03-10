import { useState } from "react";
import { INPUT_VALIDATION } from "./data-input-validation.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function InputValidation() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{INPUT_VALIDATION[selectedTopic].title}</h3>
        <p>{INPUT_VALIDATION[selectedTopic].description}</p>
        <pre>
          <code>{INPUT_VALIDATION[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Input Validation">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "everyKeyStroke"}
              onClick={() => selectHandler("everyKeyStroke")}
            >
              Validate on every keystroke
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "lostFocus"}
              onClick={() => selectHandler("lostFocus")}
            >
              Validate on lost focus
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "submit"}
              onClick={() => selectHandler("submit")}
            >
              Validate on submit
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "builtInProps"}
              onClick={() => selectHandler("builtInProps")}
            >
              Validate via built-in props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "passwordMatchLogic"}
              onClick={() => selectHandler("passwordMatchLogic")}
            >
              Password match logic
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
