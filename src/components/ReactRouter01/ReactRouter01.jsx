import { useState } from "react";
import { REACT_ROUTER_01 } from "./data-react-router-01.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactRouter01() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_ROUTER_01[selectedTopic].title}</h3>
        <p>{REACT_ROUTER_01[selectedTopic].description}</p>
        <pre>
          <code>{REACT_ROUTER_01[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="React Router - 1">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "multiplePagesInSPAs"}
              onClick={() => selectHandler("multiplePagesInSPAs")}
            >
              Multiple pages in SPAs
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "gettingStarted"}
              onClick={() => selectHandler("gettingStarted")}
            >
              Getting started
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "definingRoutes"}
              onClick={() => selectHandler("definingRoutes")}
            >
              Defining routes
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "olderWayOfDefiningRoutes"}
              onClick={() => selectHandler("olderWayOfDefiningRoutes")}
            >
              Older way of defining routes
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}