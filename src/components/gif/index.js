import React from "react";

const Gif = (props) => {
  return (
    <div>
      <h3>{props.titleGif}</h3>
      <img src={props.urlGif} alt="gif" />
    </div>
  );
};

export default Gif;
