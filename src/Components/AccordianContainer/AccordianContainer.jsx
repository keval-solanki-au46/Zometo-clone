import React from "react";
import "./AccordianContainer.scss";
import Accordian from "../Accordian/Accordian";
import data from "../../data";

const AccordianContainer = () => {
  return (
    <div className="accContainer">
      <h2>Explore options near me</h2>
      {data.map((question) => (
        <Accordian question={question} key={question.id} />
      ))}
    </div>
  );
};

export default AccordianContainer;