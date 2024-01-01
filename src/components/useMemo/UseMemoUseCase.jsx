import { useState } from "react";
import { USE_MEMO } from "./data-use-memo.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function UseMemoUseCase() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{USE_MEMO[selectedTopic].title}</h3>
        <p>{USE_MEMO[selectedTopic].description}</p>
        <pre>
          <code>{USE_MEMO[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="useMemo">
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
              isSelected={selectedTopic === "forComplexCalculations"}
              onClick={() => selectHandler("forComplexCalculations")}
            >
              For complex calculations
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
