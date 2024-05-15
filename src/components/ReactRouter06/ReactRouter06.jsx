import { useState } from "react";
import { REACT_ROUTER_06 } from "./data-react-router-06.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactRouter06() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_ROUTER_06[selectedTopic].title}</h3>
        <p>{REACT_ROUTER_06[selectedTopic].description}</p>
        <pre>
          <code>{REACT_ROUTER_06[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="React Router - 6">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "submittingDataImperatively"}
              onClick={() => selectHandler("submittingDataImperatively")}
            >
              Submitting data in a imperative way
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "reflectSubmissionStatus"}
              onClick={() => selectHandler("reflectSubmissionStatus")}
            >
              Reflect submission status to UI
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "outputValidationErrors"}
              onClick={() => selectHandler("outputValidationErrors")}
            >
              Output validation errors
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "reusingActions"}
              onClick={() => selectHandler("reusingActions")}
            >
              Reusing actions
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
