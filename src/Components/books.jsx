// books.jsx
import Book from "./book.jsx";
import "../SASS/books.sass";

const Books = ({ selectedAuthor, searchTerm }) => {
  const booksData = [
    {
      nome: "Ratatouille",
      autor: "Brad Lewis",
      link: "https://m.media-amazon.com/images/I/81n+81eQRuL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Carros",
      autor: "John Lasseter",
      link: "https://m.media-amazon.com/images/I/91mq7377jRL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Toy Story 3",
      autor: "Darla K. Anderson",
      link: "https://m.media-amazon.com/images/I/911ytdKwucL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Wall-e",
      autor: "Jim Morris",
      link: "https://m.media-amazon.com/images/I/81K-KlDulqL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Enrolados",
      autor: "David Goetz",
      link: "https://m.media-amazon.com/images/I/A1lwzdAFrmL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Lilo & Stitch",
      autor: "Chris Sanders",
      link: "https://m.media-amazon.com/images/I/71oWfDDSm0L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Vida de Inseto",
      autor: "John Lasseter",
      link: "https://m.media-amazon.com/images/I/61bSg9-QT1L._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Detona Ralph",
      autor: "Rich Moore",
      link: "https://m.media-amazon.com/images/I/81dmWZAKgAL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Bolt",
      autor: "Byron Howard",
      link: "https://m.media-amazon.com/images/I/61gYdYv0eQL.jpg",
    },
    {
      nome: "Operação Big Hero",
      autor: "Steven T. Seagle",
      link: "https://m.media-amazon.com/images/I/91Fsd6TGd+L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const filteredBooks = booksData.filter((book) => {
    const matchesAuthor =
      selectedAuthor === "default" || book.autor === selectedAuthor;
    const matchesSearch = book.nome
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesAuthor && matchesSearch;
  });

  return (
    <section className="books">
      {filteredBooks.map((book, index) => (
        <Book
          key={index}
          nome={book.nome}
          autor={book.autor}
          link={book.link}
        />
      ))}
    </section>
  );
};

export default Books;
