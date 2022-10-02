import React from "react";

function UnsplashItem(props) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${props.image.id}`}>
        <img
          src={`https://unsplash.com/photos/${props.images.id}`}
          alt={props.images.description}
        />
        <span>{props.images.alt_description}</span>
      </a>
    </li>
  );
}

function Unsplashcont(props) {
  return (
    <div className="unsplash__cont">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {props.images.map((images, index) => (
              <UnsplashItem images={images} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Unsplashcont;
