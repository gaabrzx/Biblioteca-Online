// app.jsx
import "./app.sass";
import Header from "./Components/header.jsx";
import Content from "./Components/content.jsx";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de busca

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Função para atualizar o termo de busca
  };

  return (
    <main>
      <Header onSearchChange={handleSearchChange} />{" "}
      {/* Passa a função para o Header */}
      <Content searchTerm={searchTerm} />{" "}
      {/* Passa o termo de busca para o Content */}
    </main>
  );
};

export default App;
