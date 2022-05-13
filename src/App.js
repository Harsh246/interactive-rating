import React, { useState } from "react";
import "./App.css";
import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";
function App() {
  const [selected, setSelected] = useState(undefined);
  const [submit, setSubmit] = useState(false);

  function setIt(e) {
    console.log(e.target.getAttribute("id"));

    let val = e.target.getAttribute("id");

    if (val) setSelected(val);
  }

  function submitIt() {
    if (selected) {
      setSubmit(true);
    }
  }

  return (
    <main className="app">
      <h1 className="none">something</h1>
      <article className="card">
        <div className={submit ? "none" : "initial"}>
          <header className="icon">
            <img src={star} alt="star" />
          </header>
          <section className="content">
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </section>

          <div className="ratings" onClick={setIt}>
            <div
              id="1"
              className={selected === "1" ? "rating selected" : "rating"}
            >
              1
            </div>
            <div
              id="2"
              className={selected === "2" ? "rating selected" : "rating"}
            >
              2
            </div>
            <div
              id="3"
              className={selected === "3" ? "rating selected" : "rating"}
            >
              3
            </div>
            <div
              id="4"
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
            <h2>Thank you!</h2>
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
