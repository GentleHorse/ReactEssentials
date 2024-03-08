import { useState } from "react";
import { RESET_USER_INPUTS } from "./data-reset-user-inputs.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ResetUserInputs() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{RESET_USER_INPUTS[selectedTopic].title}</h3>
        <p>{RESET_USER_INPUTS[selectedTopic].description}</p>
        <pre>
          <code>{RESET_USER_INPUTS[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Reset user inputs">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "builtInReset"}
              onClick={() => selectHandler("builtInReset")}
            >
              Built-in reset form logic
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useStateReset"}
              onClick={() => selectHandler("useStateReset")}
            >
              useState() reset form logic
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useRefReset"}
              onClick={() => selectHandler("useRefReset")}
            >
              useRef() reset form logic
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "formDataReset"}
              onClick={() => selectHandler("formDataReset")}
            >
              FormData reset form logic
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}