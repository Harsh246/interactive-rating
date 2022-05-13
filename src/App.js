import React, { useState } from "react";
import "./App.css";
import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";
function App() {
  const [selected, setSelected] = useState(undefined);
  const [submit, setSubmit] = useState(false);

  function setIt(e) {
    console.log(e.target.getAttribute("name"));

    let val = e.target.getAttribute("name");

    if (val) setSelected(val);
  }

  function submitIt() {
    if (selected) {
      setSubmit(true);
    }
  }

  return (
    <main className="app">
      <article className="card">
        <div className={submit ? "none" : "initial"}>
          <header className="icon">
            <img src={star} alt="star" />
          </header>
          <section className="content">
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </section>

          <div className="ratings" onClick={setIt}>
            <div
              name="1"
              className={selected === "1" ? "rating selected" : "rating"}
            >
              1
            </div>
            <div
              name="2"
              className={selected === "2" ? "rating selected" : "rating"}
            >
              2
            </div>
            <div
              name="3"
              className={selected === "3" ? "rating selected" : "rating"}
            >
              3
            </div>
            <div
              name="4"
              className={selected === "4" ? "rating selected" : "rating"}
            >
              4
            </div>
            <div
              name="5"
              className={selected === "5" ? "rating selected" : "rating"}
            >
              5
            </div>
          </div>
          <button onClick={submitIt}>Submit</button>
        </div>

        <div className={submit ? "submit" : "none"}>
          <header className="image">
            <img src={thanks} alt="img" />
          </header>

          <div className="result">You selected {selected} out of 5</div>

          <section className="content">
            <h1>Thank you!</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default App;
