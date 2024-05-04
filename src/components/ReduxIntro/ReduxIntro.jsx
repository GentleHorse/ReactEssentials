import { useState } from "react";
import { REDUX_INTRO } from "./data-redux-intro.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReduxIntro() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REDUX_INTRO[selectedTopic].title}</h3>
        <p>{REDUX_INTRO[selectedTopic].description}</p>
        <pre>
          <code>{REDUX_INTRO[selectedTopic].code}</code>
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
              isSelected={selectedTopic === "whatAndWhy"}
              onClick={() => selectHandler("whatAndWhy")}
            >
              What is Redux and why use it
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "howReduxWorks"}
              onClick={() => selectHandler("howReduxWorks")}
            >
              How Redux works
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}