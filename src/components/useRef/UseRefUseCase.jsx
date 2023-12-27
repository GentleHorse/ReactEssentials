import { useState } from "react";
import { USE_REF } from "./data-use-ref.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function UseRefUseCase() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{USE_REF[selectedTopic].title}</h3>
        <p>{USE_REF[selectedTopic].description}</p>
        <pre>
          <code>{USE_REF[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="useRef">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "useCaseA"}
              onClick={() => selectHandler("useCaseA")}
            >
              Use case A
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useCaseB"}
              onClick={() => selectHandler("useCaseB")}
            >
              Use case B
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "forwardingRef"}
              onClick={() => selectHandler("forwardingRef")}
            >
              Forwarding ref
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "exposingfunction"}
              onClick={() => selectHandler("exposingfunction")}
            >
              Exposing function
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "createPortal"}
              onClick={() => selectHandler("createPortal")}
            >
              Create a portal
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
