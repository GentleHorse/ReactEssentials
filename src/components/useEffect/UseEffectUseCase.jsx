import { useState } from "react";
import { USE_EFFECT  } from "./data-use-effect.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function UseEffectUseCase() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{USE_EFFECT [selectedTopic].title}</h3>
        <p>{USE_EFFECT [selectedTopic].description}</p>
        <pre>
          <code>{USE_EFFECT [selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="useEffect">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "useEffectA"}
              onClick={() => selectHandler("useEffectA")}
            >
              Call at every render
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useEffectB"}
              onClick={() => selectHandler("useEffectB")}
            >
              Call at initial render only
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useEffectC"}
              onClick={() => selectHandler("useEffectC")}
            >
              Called at dependency changes
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "useEffectD"}
              onClick={() => selectHandler("useEffectD")}
            >
              Store in localStorage
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
