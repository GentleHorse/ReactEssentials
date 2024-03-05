import { useState } from "react";
import { ERROR_HANDLING } from "./data-error-handling.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ErrorHandling() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{ERROR_HANDLING[selectedTopic].title}</h3>
        <p>{ERROR_HANDLING[selectedTopic].description}</p>
        <pre>
          <code>{ERROR_HANDLING[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Error Handling">
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
              isSelected={selectedTopic === "optimisticUpdating"}
              onClick={() => selectHandler("optimisticUpdating")}
            >
              Optimistic updating
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}