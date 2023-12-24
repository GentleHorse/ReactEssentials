import { useState } from "react";
import { STATE_USE_CASES } from "../../data";
import TabButton from "../utils/TabButton";
import Section from "../utils/Section";
import Tabs from "../utils/Tabs";

export default function StateUseCases() {
    const [selectedTopic, setSelectedTopic] = useState();

    const selectHandler = (selectedButton) => {
      setSelectedTopic(selectedButton);
    };
  
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{STATE_USE_CASES[selectedTopic].title}</h3>
          <p>{STATE_USE_CASES[selectedTopic].description}</p>
          <pre>
            <code>{STATE_USE_CASES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }
  
    return (
      <Section title="State Use Cases" id="state-use-cases">
        <Tabs  
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "switchingTabButtons"}
                onClick={() => selectHandler("switchingTabButtons")}
              >
                Switching tab buttons
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "updatingStateBasedOnOldState"}
                onClick={() => selectHandler("updatingStateBasedOnOldState")}
              >
                Updating based on old state
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "twoWayBinding"}
                onClick={() => selectHandler("twoWayBinding")}
              >
                Two-way binding
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "updateObjectStateImmutably"}
                onClick={() => selectHandler("updateObjectStateImmutably")}
              >
                Update object-state immutably
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "liftingStateUp"}
                onClick={() => selectHandler("liftingStateUp")}
              >
                Lifting state up
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "oneObjectStateOneChangeHandler"}
                onClick={() => selectHandler("oneObjectStateOneChangeHandler")}
              >
                One object state one change handler
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    );
}