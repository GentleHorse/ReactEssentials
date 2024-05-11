import { useState } from "react";
import { REACT_ROUTER_02 } from "./data-react-router-02.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactRouter02() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_ROUTER_02[selectedTopic].title}</h3>
        <p>{REACT_ROUTER_02[selectedTopic].description}</p>
        <pre>
          <code>{REACT_ROUTER_02[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="React Router - 2">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "navigatingPages"}
              onClick={() => selectHandler("navigatingPages")}
            >
              Navigating between pages with Links
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "layoutsAndNestedRoutes"}
              onClick={() => selectHandler("layoutsAndNestedRoutes")}
            >
              Layouts and nested routes
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "errorPage"}
              onClick={() => selectHandler("errorPage")}
            >
              Showing error page
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "navigationLinks"}
              onClick={() => selectHandler("navigationLinks")}
            >
              Navigation links
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
