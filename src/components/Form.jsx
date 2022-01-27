import AnswersList from "./AnswersList";

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();

    const formEl = event.target;

    const bestFeatures = [...formEl.bestFeatures]
      .filter((input) => input.checked)
      .map((input) => input.value);

    const worstFeatures = [...formEl.worstFeatures]
      .filter((input) => input.checked)
      .map((input) => input.value);

    const timeSpent = [...formEl.timeSpent]
      .filter((input) => input.checked)
      .map((input) => input.value);

    // create answer object in the form
    const answer = {
      review: formEl.review.value,
      email: formEl.email.value,
      username: formEl.username.value,
      consistency: Number(formEl.consistency.value),
      colour: Number(formEl.colour.value),
      logo: Number(formEl.logo.value),
      bestFeatures: bestFeatures,
      worstFeatures: worstFeatures,
      timeSpent: timeSpent,
    };

    // add answer to list
    props.addAnswer(answer);

    // reset the form
    event.target.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <ul>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="colour" />
              It's yellow!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="sound" />
              It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="logo" />
              It has a logo!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="size" />
              Its big!
            </label>
          </li>
        </ul>
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="colour" />
              It's yellow!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="sound" />
              It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="logo" />
              It has a logo!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="size" />
              Its big!
            </label>
          </li>
        </ul>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <ul>
          <li>
            <input
              id="consistency1"
              type="radio"
              name="consistency"
              value="1"
              required
            />
            <label htmlFor="consistency1">1</label>
          </li>
          <li>
            <input
              id="consistency2"
              type="radio"
              name="consistency"
              value="2"
              required
            />
            <label htmlFor="consistency2">2</label>
          </li>
          <li>
            <input
              id="consistency3"
              type="radio"
              name="consistency"
              value="3"
              required
            />
            <label htmlFor="consistency3">3</label>
          </li>
          <li>
            <input
              id="consistency4"
              type="radio"
              name="consistency"
              value="4"
              required
            />
            <label htmlFor="consistency4">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input id="colour1" type="radio" name="colour" value="1" required />
            <label htmlFor="colour1">1</label>
          </li>
          <li>
            <input id="colour2" type="radio" name="colour" value="2" required />
            <label htmlFor="colour2">2</label>
          </li>
          <li>
            <input id="colour3" type="radio" name="colour" value="3" required />
            <label htmlFor="colour3">3</label>
          </li>
          <li>
            <input id="colour4" type="radio" name="colour" value="4" required />
            <label htmlFor="colour4">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <ul>
          <li>
            <input id="logo1" type="radio" name="logo" value="1" required />
            <label htmlFor="logo1">1</label>
          </li>
          <li>
            <input id="logo2" type="radio" name="logo" value="2" required />
            <label htmlFor="logo2">2</label>
          </li>
          <li>
            <input id="logo3" type="radio" name="logo" value="3" required />
            <label htmlFor="logo3">3</label>
          </li>
          <li>
            <input id="logo4" type="radio" name="logo" value="4" required />
            <label htmlFor="logo4">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>
            <label>
              <input
                className="timeSpent"
                name="timeSpent"
                type="checkbox"
                value="swimming"
              />
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input
                className="timeSpent"
                name="timeSpent"
                type="checkbox"
                value="bathing"
              />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input
                className="timeSpent"
                name="timeSpent"
                type="checkbox"
                value="chatting"
              />
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input
                className="timeSpent"
                name="timeSpent"
                type="checkbox"
                value="noTime"
              />
              I don't like to spend time with it
            </label>
          </li>
        </ul>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols={30} rows={10} required></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" required minLength={2} />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" required />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
