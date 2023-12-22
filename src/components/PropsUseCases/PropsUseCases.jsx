import { useState } from "react";
import { PROPS_USE_CASES } from "../../data";
import TabButton from "../utils/TabButton";
import Section from "../utils/Section";
import Tabs from "../utils/Tabs";

export default function PropsUseCases() {
    const [selectedTopic, setSelectedTopic] = useState();

    const selectHandler = (selectedButton) => {
      setSelectedTopic(selectedButton);
    };
  
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{PROPS_USE_CASES[selectedTopic].title}</h3>
          <p>{PROPS_USE_CASES[selectedTopic].description}</p>
          <pre>
            <code>{PROPS_USE_CASES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }
  
    return (
      <Section title="Props Use Cases" id="props-use-cases">
        <Tabs  
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "forwardingExistingPropsId"}
                onClick={() => selectHandler("forwardingExistingPropsId")}
              >
                Forwarding existing props 'id'
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "forwardingExistingPropsOnClick"}
                onClick={() => selectHandler("forwardingExistingPropsOnClick")}
              >
                Forwarding existing props 'onClick'
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "creatingAdditionalSlot"}
                onClick={() => selectHandler("creatingAdditionalSlot")}
              >
                Creating additional slot
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "dynamicallyChangeHtmlElements"}
                onClick={() => selectHandler("dynamicallyChangeHtmlElements")}
              >
                Dynamically change html elements
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "dynamicallyChangeClassName"}
                onClick={() => selectHandler("dynamicallyChangeClassName")}
              >
                Dynamically change className
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    );
}