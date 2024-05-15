import { useState } from "react";
import { REACT_ROUTER_04 } from "./data-react-router-04.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactRouter04() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_ROUTER_04[selectedTopic].title}</h3>
        <p>{REACT_ROUTER_04[selectedTopic].description}</p>
        <pre>
          <code>{REACT_ROUTER_04[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="React Router - 4">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "dataFetchingWithLoader"}
              onClick={() => selectHandler("dataFetchingWithLoader")}
            >
              Data fetching with a loader()
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "storeLoaderCode"}
              onClick={() => selectHandler("storeLoaderCode")}
            >
              Store the loader() code inside the component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "fetchingRouteAction"}
              onClick={() => selectHandler("fetchingRouteAction")}
            >
              Fetching the route action state
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "returningResponseObject"}
              onClick={() => selectHandler("returningResponseObject")}
            >
              Returning Response object in loader()
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
