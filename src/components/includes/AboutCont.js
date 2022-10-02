import React from "react";

function AboutInfo(props) {
  //전체 데이터 가져오기 props
  return (
    <div className="about">
      <div className="left">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <div className="about_img">
          <img src={props.img} alt={props.title} />
        </div>
      </div>
    </div>
  ); //일부 {}
}

const aboutText = [
  //객체 배열 불러오는 방법 공부하기
  {
    title: "유튜브 API",
    desc: "유튜브에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "TMDB API",
    desc: "TMDB에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    title: "Unsplash API",
    desc: "Unsplash에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

function AboutCont() {
  return (
    <section className="about__cont">
      <div className="container">
        <div className="about__inner">
          {aboutText.map((txt) => (
            <AboutInfo
              key={txt.title}
              title={txt.title}
              desc={txt.desc}
              img={txt.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCont;
