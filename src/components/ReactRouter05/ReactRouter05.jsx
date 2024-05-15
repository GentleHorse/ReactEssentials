import { useState } from "react";
import { REACT_ROUTER_05 } from "./data-react-router-05.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ReactRouter05() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{REACT_ROUTER_05[selectedTopic].title}</h3>
        <p>{REACT_ROUTER_05[selectedTopic].description}</p>
        <pre>
          <code>{REACT_ROUTER_05[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="React Router - 5">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "genericErrorHandling"}
              onClick={() => selectHandler("genericErrorHandling")}
            >
              Generic error handling
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "fetchDataOfDynamicRoutes"}
              onClick={() => selectHandler("fetchDataOfDynamicRoutes")}
            >
              Fetch data of dynamic routes
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "shareALoaderByMultipleRoutes"}
              onClick={() => selectHandler("shareALoaderByMultipleRoutes")}
            >
              Share a loader by muliplte routes
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "dataSubmissionWithFormAndAction"}
              onClick={() => selectHandler("dataSubmissionWithFormAndAction")}
            >
              Data submission with {"<"}Form{">"} & action()
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
