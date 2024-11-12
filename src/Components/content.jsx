// content.jsx
import "../SASS/content.sass";
import Books from "./books.jsx";
import { useState } from "react";

const Content = ({ searchTerm }) => {
  // Recebe searchTerm como prop
  const [selectedAuthor, setSelectedAuthor] = useState("default");

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  return (
    <main id="content">
      <div className="select_area">
        {/* <select name="gênero" id="gênero">
          <option value="default" selected>
            Gênero
          </option>
          <option value="logistica">Logística</option>
          <option value="administracao">Administração</option>
          <option value="eletrica">Elétrica</option>
          <option value="suporteti">Suporte Técnico em T.I</option>
        </select> */}

        <select name="author" id="author" onChange={handleAuthorChange}>
          <option value="default" selected>
            Autor
          </option>
          <option value="Brad Lewis">Brad Lewis</option>
          <option value="John Lasseter">John Lasseter</option>
          <option value="Darla K. Anderson">Darla K. Anderson</option>
          <option value="Jim Morris">Jim Morris</option>
          <option value="David Goetz">David Goetz</option>
          <option value="Chris Sanders">Chris Sanders</option>
          <option value="Rich Moore">Rich Moore</option>
          <option value="Byron Howard">Byron Howard</option>
          <option value="Steven T. Seagle">Steven T. Seagle</option>
        </select>
      </div>
      <Books selectedAuthor={selectedAuthor} searchTerm={searchTerm} />{" "}
      {/* Passa searchTerm para Books */}
    </main>
  );
};

export default Content;
