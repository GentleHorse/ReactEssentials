import { useState } from "react";
import { REDUX_TOOLKIT } from "./data-redux-toolkit.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReduxToolkit() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REDUX_TOOLKIT[selectedTopic].title}</h3>
        <p>{REDUX_TOOLKIT[selectedTopic].description}</p>
        <pre>
          <code>{REDUX_TOOLKIT[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Redux Toolkit">
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
              isSelected={selectedTopic === "addingStateSlices"}
              onClick={() => selectHandler("addingStateSlices")}
            >
              Adding state slices
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "connectingReduxToolkitState"}
              onClick={() => selectHandler("connectingReduxToolkitState")}
            >
              Connecting Redux Toolkit State
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "providingTheStore"}
              onClick={() => selectHandler("providingTheStore")}
            >
              Providing the store
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "actionObjects"}
              onClick={() => selectHandler("actionObjects")}
            >
              Action objects
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "workingWithMutipleSlices"}
              onClick={() => selectHandler("workingWithMutipleSlices")}
            >
              Working with multiple slices
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}