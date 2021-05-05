import React from "react";
import Title from "../Title/Title";
import "./Content.scss";

// Content Componet that take the topic and title to make an awesome topic
const Content = ({ topic, title }) => {
  return (
    <div className="container-fluid content-field mt-5">
      <Title className="content-field__title-content" title={title} />
      <p className="container content-field__paragraph mt-5">{topic}</p>
    </div>
  );
};
export default Content;
