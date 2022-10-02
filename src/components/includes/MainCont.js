import React from "react";

function MainInfo({text}) {
  return <div>{text}</div>;
}
const mainText = [           
  { text: "we provide" },
  { text: "visual coding" },
  { text: "solution" },
  { text: "for your web" },   
];
function Maincont() {
  return (
    <section className="main__cont">                     
      <div className="main__inner">
        {mainText.map((txt) => (                         //map 공부하기
          <MainInfo text={txt.text} key={txt.text} />
        ))}
      </div>
    </section>
  );
}

export default Maincont;
