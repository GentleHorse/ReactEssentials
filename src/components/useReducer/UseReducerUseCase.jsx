import { useState } from "react";
import { USE_REDUCER } from "./data-use-reducer.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function UseReducerUseCase() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{USE_REDUCER[selectedTopic].title}</h3>
        <p>{USE_REDUCER[selectedTopic].description}</p>
        <pre>
          <code>{USE_REDUCER[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="useReducer">
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
              isSelected={selectedTopic === "useWithContextAPI"}
              onClick={() => selectHandler("useWithContextAPI")}
            >
              Use with context API
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
