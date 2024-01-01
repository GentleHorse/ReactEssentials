export const REACT_TIPS = {
  syncroniseComponents: {
    title: "Syncronise child components in render cycles",
    description:
    "The parent component has child conponents and when the parent component gets re-rendered based on states changes, child components does not get re-rendered at the same time. If you want to put them in the syncronised render cycle of parent one, let them share the parent variables which drive from state by adding key property. In this case, the parent component is Quiz, the child component is QuestionTimer, and the key is activeQuestionIndex.",
    code: `
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  
  ...

  return (
    <div> 
        <QuestionTimer ... key={activeQuestionIndex} />
        
        ...
          
    </div>
  );
}
`,
  },
  preventingUnnecessaryRendering: {
    title: "Preventing unnecessary rendering",
    description:
    "Using memo() enables to prevent unnecessary child components rendering when the parent component renders because memo() lets you skip re-rendering a component when its props are unchanged by comparing old props with current props. But DO NOT OVERUSE memo() and use it AS HIGH UP IN THE COMPONENT TREE AS POSSIBLE because checking props with memo() costs a performance. Therefore, do not use it on components where props will change frequently.",
    code: `
import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // ...
});

export default SomeComponent;
`,
  },
};
