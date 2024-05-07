import { useState } from "react";
import { REDUX_WITH_REACT_02 } from "./data-redux-with-react-02.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReduxWithReact02() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REDUX_WITH_REACT_02[selectedTopic].title}</h3>
        <p>{REDUX_WITH_REACT_02[selectedTopic].description}</p>
        <pre>
          <code>{REDUX_WITH_REACT_02[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Redux with React - 2">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "attachingPayload"}
              onClick={() => selectHandler("attachingPayload")}
            >
              Attaching payloads to actions
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "workingWithMultipleStateProperties"}
              onClick={() => selectHandler("workingWithMultipleStateProperties")}
            >
              Working with multiple state properties
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}