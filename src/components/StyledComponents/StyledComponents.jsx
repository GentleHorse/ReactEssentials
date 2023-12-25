import { useState } from "react";
import { STYLED_COMPONENTS } from "./data-styled-components.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function StyledComponents() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{STYLED_COMPONENTS[selectedTopic].title}</h3>
        <p>{STYLED_COMPONENTS[selectedTopic].description}</p>
        <pre>
          <code>{STYLED_COMPONENTS[selectedTopic].code}</code>
        </pre>
        </TabContent>
    );
  }

  return (
    <Section title="Styled Components">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "installation"}
              onClick={() => selectHandler("installation")}
            >
              Installation
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useDynamicValues"}
              onClick={() => selectHandler("useDynamicValues")}
            >
              Use dynamic values
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "pseudoSelectorsNestedRulesMediaQueries"}
              onClick={() => selectHandler("pseudoSelectorsNestedRulesMediaQueries")}
            >
              Pseudo Selectors, Nested Rules, Media Queries
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "reusableStyleComponents"}
              onClick={() => selectHandler("reusableStyleComponents")}
            >
              Reusable style components
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}