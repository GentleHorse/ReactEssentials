import { useState } from "react";
import { FORMS_USER_INPUTS } from "./data-forms-user-inputs.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function FormsAndUserInputs() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{FORMS_USER_INPUTS[selectedTopic].title}</h3>
        <p>{FORMS_USER_INPUTS[selectedTopic].description}</p>
        <pre>
          <code>{FORMS_USER_INPUTS[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Forms and User Inputs">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "preventDefaultBehaviour"}
              onClick={() => selectHandler("preventDefaultBehaviour")}
            >
              Prevent default submission behaviour
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "oneStateOneHandler"}
              onClick={() => selectHandler("oneStateOneHandler")}
            >
              One state, one handler
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "oneRefOneHandler"}
              onClick={() => selectHandler("oneRefOneHandler")}
            >
              One ref, one handler
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "formDataObject"}
              onClick={() => selectHandler("formDataObject")}
            >
              FormData object
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}