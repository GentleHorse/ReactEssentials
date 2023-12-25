import { useState } from "react";
import { SETUP } from "../../data";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function Setup() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{SETUP[selectedTopic].title}</h3>
        <p>{SETUP[selectedTopic].description}</p>
        <pre>
          <code>{SETUP[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Setup">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "npx"}
              onClick={() => selectHandler("npx")}
            >
              npx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "fromScratch"}
              onClick={() => selectHandler("fromScratch")}
            >
              from scratch
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "withVite"}
              onClick={() => selectHandler("withVite")}
            >
              with Vite
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
