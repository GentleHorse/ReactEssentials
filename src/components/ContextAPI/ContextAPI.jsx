import { useState } from "react";
import { CONTEXT_API } from "./data-context-api.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function ContextAPI() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{CONTEXT_API[selectedTopic].title}</h3>
        <p>{CONTEXT_API[selectedTopic].description}</p>
        <pre>
          <code>{CONTEXT_API[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Context API">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "createContext"}
              onClick={() => selectHandler("createContext")}
            >
              createContext
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "someContextProvider"}
              onClick={() => selectHandler("someContextProvider")}
            >
              SomeContext.Provider
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useContext"}
              onClick={() => selectHandler("useContext")}
            >
              useContext
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "someContextConsumer"}
              onClick={() => selectHandler("someContextConsumer")}
            >
              SomeContext.Consumer (Legacy)
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "linkState"}
              onClick={() => selectHandler("linkState")}
            >
              Link state
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "linkStateSndHandlers"}
              onClick={() => selectHandler("linkStateSndHandlers")}
            >
              Link state and handlers
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "outsourcingContext"}
              onClick={() => selectHandler("outsourcingContext")}
            >
              Outsourcing context
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
