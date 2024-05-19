import { useState } from "react";
import { AUTHENTICATION_01 } from "./data-authentication-01.js";
import TabButton from "../utils/TabButton.jsx";
import Section from "../utils/Section.jsx";
import Tabs from "../utils/Tabs.jsx";
import TabContent from "../utils/TabContent.jsx";

export default function Authentication01() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <TabContent>
        <h3>{AUTHENTICATION_01[selectedTopic].title}</h3>
        <p>{AUTHENTICATION_01[selectedTopic].description}</p>
        <pre>
          <code>{AUTHENTICATION_01[selectedTopic].code}</code>
        </pre>
      </TabContent>
    );
  }

  return (
    <Section title="Authentication - 1">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "serverSideSessions"}
              onClick={() => selectHandler("serverSideSessions")}
            >
              Server-side Sessions
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "authenticationTokens"}
              onClick={() => selectHandler("authenticationTokens")}
            >
              Authentication Tokens
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}