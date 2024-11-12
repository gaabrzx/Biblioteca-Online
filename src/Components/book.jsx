import React from "react";

import "../SASS/book.sass";

// "https://picsum.photos/id/237/250/300"

const book = (props) => {
  var link = props.link;

  return (
    <div
      className="book"
      style={{
        backgroundImage: `url(${link})`, // Note as crase e a interpolação de string
      }}
    >
      <p>
        {props.nome}
        <br />
        <span style={{ fontWeight: "bold" }}>{props.autor}</span>
      </p>
    </div>
  );
};

export default book;
