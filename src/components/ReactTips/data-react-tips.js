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
};
