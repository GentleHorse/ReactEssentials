import { useState } from "react";
import { REDUX_ADVANCED } from "./data-redux-advanced.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReduxAdvanced() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REDUX_ADVANCED[selectedTopic].title}</h3>
        <p>{REDUX_ADVANCED[selectedTopic].description}</p>
        <pre>
          <code>{REDUX_ADVANCED[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Redux Advanced">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "asyncCodeWithUseEffect"}
              onClick={() => selectHandler("asyncCodeWithUseEffect")}
            >
              Async code with useEffect
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "asyncCodeWithActionCreatorThunk"}
              onClick={() => selectHandler("asyncCodeWithActionCreatorThunk")}
            >
              Aync code with action creator thunk
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "fetchingData"}
              onClick={() => selectHandler("fetchingData")}
            >
              Fetching data
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}