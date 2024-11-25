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
          <option value="Camila Ceccatto">Camila Ceccatto</option>
          <option value="Alexandre Fernandes">Alexandre Fernandes</option>
          <option value="Lindeberg Barros">Lindeberg Barros</option>
          <option value="Celso Henrique">Celso Henrique</option>
          <option value="Paulo Sérgio">Paulo Sérgio</option>
          <option value="Kariane de Oliveira">Kariane de Oliveira</option>
          <option value="José Augusto">José Augusto</option>
          <option value="Isaias Camilo">Isaias Camilo</option>
          <option value="Everton Coimbra">Everton Coimbra</option>
          <option value="Laércio Vasconcelos">Laércio Vasconcelos</option>
          <option value="Marcelo Duarte">Marcelo Duarte</option>
          <option value="Caruso">Caruso</option>
          <option value="Senac">Senac</option>
          <option value="Becsom Salles">Becsom Salles</option>
          <option value="Wendell Odom">Wendell Odom</option>
          <option value="William Pereira">William Pereira</option>
          <option value="Mauricio Samy">Mauricio Samy</option>
          <option value="Carlos Eduardo">Carlos Eduardo</option>
          <option value="Amir Wirth">Amir Wirth</option>
          <option value="Fábio Burch">Fábio Burch</option>
          <option value="Rosa Katori">Rosa Katori</option>
          <option value="Cláudio Vieira">Cláudio Vieira</option>
          <option value="Paulo Coelho ">Paulo Coelho </option>
          <option value="Mario Sergio">Mario Sergio</option>
          <option value="Pablo Capistrano">Pablo Capistrano</option>
          <option value="Julien Benda">Julien Benda</option>
          <option value="Gabriel chalita">Gabriel chalita</option>
          <option value="Carlos Bernardo">Carlos Bernardo</option>
          <option value="Gilberto Ururahy">Gilberto Ururahy</option>
          <option value="Jim kwik">Jim kwik</option>
          <option value="Herbert de Souza">Herbert de Souza</option>
          <option value="Jose haddad">Jose haddad</option>
        </select>
      </div>
      <Books selectedAuthor={selectedAuthor} searchTerm={searchTerm} />{" "}
      {/* Passa searchTerm para Books */}
    </main>
  );
};

export default Content;
