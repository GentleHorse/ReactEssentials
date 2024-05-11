import { useState } from "react";
import { REACT_ROUTER_03 } from "./data-react-router-03.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactRouter03() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_ROUTER_03[selectedTopic].title}</h3>
        <p>{REACT_ROUTER_03[selectedTopic].description}</p>
        <pre>
          <code>{REACT_ROUTER_03[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="React Router - 3">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "navigatingProgrammatically"}
              onClick={() => selectHandler("navigatingProgrammatically")}
            >
              Navigating programmatically
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "dynamicRoutes"}
              onClick={() => selectHandler("dynamicRoutes")}
            >
              Dynamic routes
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "relativeAbsolutePath"}
              onClick={() => selectHandler("relativeAbsolutePath")}
            >
              Relative path vs absolute path
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "indexRoutes"}
              onClick={() => selectHandler("indexRoutes")}
            >
              Index routes
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
