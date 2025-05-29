import React, { Fragment } from "react";
import Card from "./Card";

// ======== ways of destructuring props ==========
// props here because we have to recieve from parent
// const Card = (props) => {
// const { name, email, id } = props;

const CardList = ({robots}) => {
  return (
    <Fragment>
      {robots.map((robot) => (
        <Card robot={robot} />
      ))}
    </Fragment>
  );
};

export default CardList;
