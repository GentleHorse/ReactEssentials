import { useState } from "react";
import { SETUP } from "../../data";
import TabButton from "../utils/TabButton";
import Section from "../utils/Section";
import Tabs from "../utils/Tabs";

export default function Setup() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{SETUP[selectedTopic].title}</h3>
        <p>{SETUP[selectedTopic].description}</p>
        <pre>
          <code>{SETUP[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Setup" id="setup">
      <Tabs
        /**
         * Built-in tags
        */  
        // ButtonsContainer="menu"
        // ButtonsContainer="div"
        // ButtonsContainer="ul"

        /**
         * Custom tags
        */
        // ButtonsContainer={Section}

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
