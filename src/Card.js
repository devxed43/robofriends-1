import React, { Fragment } from "react";

// ======== ways of destructuring props ==========
// props here because we have to recieve from parent
// const Card = (props) => {
// const { name, email, id } = props;

const Card = ({ robot }) => {
  const { id, name, email } = robot;
  return (
    <Fragment>
      <div className="bg-light-green dib br3 pa3 mar2 grow bw2 shadow-5">
        <img alt={`${id}`} src={`https://robohash.org/${id}`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
