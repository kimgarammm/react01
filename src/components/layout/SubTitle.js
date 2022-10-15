import React from "react";

function SubTitle(props) {
  return (
    <section className="cont__subtitle">
      <div className="container">
        <h1>
          <strong>{props.subtitle[0]}</strong>
          <em>{props.subtitle[1]}</em>
        </h1>
      </div>
    </section>
  );
}

export default SubTitle;
