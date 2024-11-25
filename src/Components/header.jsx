// header.jsx
import "../SASS/header.sass";

const Header = ({ onSearchChange }) => {
  return (
    <header>
      <h1 style={{ color: "#526fc5" }}>BookHunt</h1>
      <input
        type="search"
        name="searchBook"
        id="searchBook"
        placeholder="Pesquisar Livro"
        onChange={onSearchChange} // Usa a função onSearchChange
      />
    </header>
  );
};

export default Header;
