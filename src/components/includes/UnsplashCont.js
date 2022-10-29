import React from "react";

function UnsplashItem(props) {
  return (
    <figure className="gallery__item">
      <img src={`${props.image.urls.thumb}`} alt="" className="gallery__img" />
    </figure>
  );
}

function UnsplashCont(props) {
  console.log(props);
  return (
    <div className="unsplash__cont">
      <div className="container">
        <div className="unsplash__list">
          <ul>
            {props.image.map((image) => (
              <UnsplashItem image={image} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UnsplashCont;
