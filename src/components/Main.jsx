import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answersList, setAnswersList] = useState([
    {
      review: "Love it",
      email: "nico@las.com",
      username: "nicolas",
      consistency: 3,
      colour: 3,
      logo: 3,
      bestFeatures: ["colour"],
      worstFeatures: ["sound"],
      timeSpent: ["swimming"],
    },
  ]);

  function addAnswer(answer) {
    setAnswersList([...answersList, answer]);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form">
        <Form addAnswer={addAnswer} />
      </section>
    </main>
  );
}

export default Main;
