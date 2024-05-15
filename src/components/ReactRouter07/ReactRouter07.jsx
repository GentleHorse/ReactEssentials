import { useState } from "react";
import { REACT_ROUTER_07 } from "./data-react-router-07.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactRouter07() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_ROUTER_07[selectedTopic].title}</h3>
        <p>{REACT_ROUTER_07[selectedTopic].description}</p>
        <pre>
          <code>{REACT_ROUTER_07[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="React Router - 7">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "behindTheSceneWork"}
              onClick={() => selectHandler("behindTheSceneWork")}
            >
              Behind-the-scenes work with useFetcher()
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "differingDataFetching"}
              onClick={() => selectHandler("differingDataFetching")}
            >
              Differring data fetching
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "showDataWhileLoading"}
              onClick={() => selectHandler("showDataWhileLoading")}
            >
              Show data while loading other data
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
