import { useState } from "react";
import { USE_CALLBACK } from "./data-use-callback.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function UseCallbackUseCase() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{USE_CALLBACK[selectedTopic].title}</h3>
        <p>{USE_CALLBACK[selectedTopic].description}</p>
        <pre>
          <code>{USE_CALLBACK[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="useCallback">
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
              isSelected={selectedTopic === "useWithMemo"}
              onClick={() => selectHandler("useWithMemo")}
            >
              Use with memo()
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
