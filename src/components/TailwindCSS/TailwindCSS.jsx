import { useState } from "react";
import { TAILWIND_CSS } from "./data-tailwind-css.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function TailwindCSS() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{TAILWIND_CSS[selectedTopic].title}</h3>
        <p>{TAILWIND_CSS[selectedTopic].description}</p>
        <pre>
          <code>{TAILWIND_CSS[selectedTopic].code}</code>
        </pre>
        </TabContent>
    );
  }

  return (
    <Section title="CSS Styling">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "installationWithVite"}
              onClick={() => selectHandler("installationWithVite")}
            >
              Installation with Vite
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "howToUse"}
              onClick={() => selectHandler("howToUse")}
            >
              How to use
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "usingCustomFont"}
              onClick={() => selectHandler("usingCustomFont")}
            >
              Using custom font
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "mediaQueries"}
              onClick={() => selectHandler("mediaQueries")}
            >
              Media queries 
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "hoverState"}
              onClick={() => selectHandler("hoverState")}
            >
              Hover state
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "dynamicStyling"}
              onClick={() => selectHandler("dynamicStyling")}
            >
              Dynamic styling
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}