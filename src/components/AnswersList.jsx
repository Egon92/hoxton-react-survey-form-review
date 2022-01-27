import AnswersItem from "./AnswersItem";

function AnswersList(props) {
  return (
    <ul>
      {props.answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

export default AnswersList;
