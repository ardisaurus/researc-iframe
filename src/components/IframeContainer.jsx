import React from "react";
import { Link } from "react-router-dom";

const IframeContainer = ({ url, title }) => {
  return (
    <div>
      <Link to="/">{"<< Back to home"}</Link>
      <h2>{title}</h2>
      <iframe title="Embedded App" src={url} width="100%" height="600" />
    </div>
  );
};

export default IframeContainer;
