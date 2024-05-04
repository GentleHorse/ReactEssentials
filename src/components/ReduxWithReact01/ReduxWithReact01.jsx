import { useState } from "react";
import { REDUX_WITH_REACT_01 } from "./data-redux-with-react-01.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReduxWithReact01() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REDUX_WITH_REACT_01[selectedTopic].title}</h3>
        <p>{REDUX_WITH_REACT_01[selectedTopic].description}</p>
        <pre>
          <code>{REDUX_WITH_REACT_01[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Redux Intro">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "gettingStarted"}
              onClick={() => selectHandler("gettingStarted")}
            >
              Getting started
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "createTheStore"}
              onClick={() => selectHandler("createTheStore")}
            >
              Create the store
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "providingTheStore"}
              onClick={() => selectHandler("providingTheStore")}
            >
              Providing the store
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}