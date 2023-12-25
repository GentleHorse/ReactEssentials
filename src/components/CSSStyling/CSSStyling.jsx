import { useState } from "react";
import { CSS_STYLING } from "./data-css-styling.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function CSSStyling() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{CSS_STYLING[selectedTopic].title}</h3>
        <p>{CSS_STYLING[selectedTopic].description}</p>
        <pre>
          <code>{CSS_STYLING[selectedTopic].code}</code>
        </pre>
        </TabContent>
    );
  }

  return (
    <Section title="CSS Styling">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "inlineStyling"}
              onClick={() => selectHandler("inlineStyling")}
            >
              Inline styling
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "addingClassNameConditionally"}
              onClick={() => selectHandler("addingClassNameConditionally")}
            >
              Adding className conditionally
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "CSSModules"}
              onClick={() => selectHandler("CSSModules")}
            >
              CSS modules
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}