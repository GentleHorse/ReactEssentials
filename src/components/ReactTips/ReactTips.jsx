import { useState } from "react";
import { REACT_TIPS } from "./data-react-tips.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactTips() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_TIPS[selectedTopic].title}</h3>
        <p>{REACT_TIPS[selectedTopic].description}</p>
        <pre>
          <code>{REACT_TIPS[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="TIPS">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "syncroniseComponents"}
              onClick={() => selectHandler("syncroniseComponents")}
            >
              Syncronise components
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
