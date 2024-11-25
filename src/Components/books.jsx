// books.jsx
import Book from "./book.jsx";
import "../SASS/books.sass";

const Books = ({ selectedAuthor, searchTerm }) => {
  const booksData = [
    {
      nome: "Educação Profissional SENAI-RJ",
      autor: "Camila Ceccatto",
      link: "https://static.estantevirtual.com.br/book/00/8BF-5913-000/8BF-5913-000_detail1.png?ts=1715269359764&ims=155x231",
    },
    {
      nome: "Administração de Redes Remotas ",
      autor: "Alexandre Fernandes",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89dl6tfyaWoc-lMPUZDnEwGr4ptE1rJv0dA&s",
    },
    {
      nome: "Administração de Redes Locais",
      autor: "Lindeberg Barros",
      link: "https://m.media-amazon.com/images/I/81y1KSJ3a7L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "SQL Curso Prático",
      autor: "Celso Henrique",
      link: "https://m.media-amazon.com/images/I/61no2mAsdhL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Cabeamento Estruturado",
      autor: "Paulo Sérgio",
      link: "https://m.media-amazon.com/images/I/61ra5ijsJSL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Informática Qualificação Profissional",
      autor: "Kariane de Oliveira",
      link: "https://www.santanderopenacademy.com/pt_br/blog/Conhecimentos-de-informatica/_jcr_content/root/hero/imageDesktopLG.coreimg.jpeg/1711396526923/conhecimentos-de-informatica-1.jpeg",
    },
    {
      nome: "Algoritmos",
      autor: "José Augusto",
      link: "https://m.media-amazon.com/images/I/61TiyqsCohL.jpg",
    },
    {
      nome: "Lógica de Programação (Aprendendo a Programar)",
      autor: "Camila Ceccatto ",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KPZa_fP3QdqtddNGHJLvypcmX25FIN_FaQ&s",
    },
    {
      nome: "Programação Orientada a Objetos em JAVA",
      autor: "Isaias Camilo",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToijEroY4G3n4-q3nXPlWN_S-klrp4p11psA&s ",
    },
    {
      nome: "Desenvolvimento para Web com Java",
      autor: "Everton Coimbra",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4ol7ny2ArNUNiwCHSYcvK68ejh3-T7Q5mA&s",
    },
    {
      nome: "Consertando Micros  2ª Edição",
      autor: "Laércio Vasconcelos ",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXkNXIH5GhrCfZAJvErzXVMrnuII_MwR09g&s",
    },
    {
      nome: "O Guia dos Curiosos",
      autor: "Marcelo Duarte",
      link: "https://m.media-amazon.com/images/I/51eCdB3XX2L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Redes Sem Fio",
      autor: "Alexandre Fernandes",
      link: "https://m.media-amazon.com/images/I/61wCtNJmLFL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Redes de Computadores Fundamentos",
      autor: "Alexandre Fernandes",
      link: "https://m.media-amazon.com/images/I/71ijsF4C8PL._UF894,1000_QL80_.jpg",
    },
    {
      nome: "Segurança em Informática e de Informações ",
      autor: "Caruso",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BSOqejiP2lV99d1jiJ9zNehRKyZycdqofQ&s",
    },
    {
      nome: "Guia de Internet de Conectividade 11ª Edição",
      autor: "Senac",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUG-507ISO-nBuGQQATeLqWeiSFw0bo0SYlQ&s",
    },
    {
      nome: "Introdução ao Gerenciamento de Ambientes Computacionais",
      autor: "Becsom Salles",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBIJx0wa6frH2vac9r5i9kaZ3CjWfZZSa3A&s",
    },
    {
      nome: "CCNA ICND2",
      autor: "Wendell Odom",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmI5LldmTZawBDvOf4sdBmusAMVg6gd4Xew&s",
    },
    {
      nome: "Banco de Dados Teoria e Desenvolvimento",
      autor: "William Pereira",
      link: "https://m.media-amazon.com/images/I/61e1YhJW8oL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Construindo sites com CSS e (X)HTML",
      autor: "Mauricio Samy",
      link: "https://m.media-amazon.com/images/I/619aV5TbMdL.jpg",
    },
    {
      nome: "Excel 2016 Avançado",
      autor: "Camila Ceccatto",
      link: "https://m.media-amazon.com/images/I/51MGszp+yUL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Manual Prático de Redes",
      autor: "Laércio Vasconcelos",
      link: "https://imagens.disal.com.br/produtos/ampliada/1235095.jpg",
    },
    {
      nome: "Servidores Linux",
      autor: "Carlos Eduardo",
      link: "https://m.media-amazon.com/images/I/51N8GnpXV0L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Manutenção de micros na prática",
      autor: "Laércio Vasconcelos",
      link: "https://m.media-amazon.com/images/I/61SeUvqEW5L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Rede de computadores - Tecnologia e Convergência das Redes",
      autor: "Amir Wirth",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvAEMCUqAWfjicNzxIjxto4M0wgcK7NI00w&s",
    },
    {
      nome: "300 Superdicas de Editoração, Design e Artes Gráficas 4ª edição",
      autor: "Ricardo Minoru",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELBqQSqrTfrV5u1fvX_ZVrwf4ZxEcNl020g&s",
    },
    {
      nome: "Programando em PHP Manual passo-a-passo",
      autor: "Fábio Burch",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQU5JpG06Xplu44vIY67Bj-EhgD9o1mc53MQ&s",
    },
    {
      nome: "AutoCad 2013",
      autor: "Rosa Katori",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQ5j_WFDRCCC5PawvpD-HImKcjyL8PEqFwQ&s",
    },
    {
      nome: "CCNENT/CCNA ICND1",
      autor: "Wendell Odom",
      link: "https://m.media-amazon.com/images/I/619vtrW9BDL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Raspberry PI",
      autor: "Cláudio Vieira",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXqEE3CnH6WVPYBwCAaiaChxQlZOvdXYNqQ&s",
    },
    {
      nome: "O livro dos manuais ",
      autor: "Paulo Coelho ",
      link: "https://www.topleituras.com/livros/livro-manuais-b0bb-capa.webp",
    },
    {
      nome: "Não nascemos prontos",
      autor: "Mario Sergio",
      link: "https://m.media-amazon.com/images/I/71ZWwsehofL.jpg",
    },
    {
      nome: "Simples filosofia",
      autor: "Pablo Capistrano",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-RAyQJUrdW_AEtK5pj-g6ZvYZw-THpBHaA&s",
    },
    {
      nome: "A traição dos intelectuais",
      autor: "Julien Benda",
      link: "https://images.tcdn.com.br/img/img_prod/1072744/a_traicao_dos_intelectuais_69_1_014a7c8c8766d5d6e7aa655476968fb6.jpg",
    },
    {
      nome: "Cooperação e Igualdade",
      autor: "Gabriel chalita",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TpzCjA5bWmdLaXSCIdagP2WaEYxHTLSF3w&s",
    },
    {
      nome: "Não espere pelo epitáfio",
      autor: "Mario Sergio",
      link: "https://m.media-amazon.com/images/I/71Y2ekm7F0L._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Respeito e Convivência",
      autor: "Gabriel chalita",
      link: "https://m.media-amazon.com/images/I/71ZxPBdlmaL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "Pensar bem nos faz bem",
      autor: "Mario Sergio",
      link: "https://m.media-amazon.com/images/I/715XxxH1-aL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Curso de Iniciação logosófica",
      autor: "Carlos Bernardo",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_w5gMuN__Ry2uTCLF7U6-2xQvaNUZVCeiA&s",
    },
    {
      nome: "O cérebro emocional",
      autor: "Gilberto Ururahy",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdf-DcrcIsBf1pc3aMZdGJNNsfZevECdgz9g&s",
    },
    {
      nome: "Sem limite",
      autor: "Jim kwik",
      link: "https://m.media-amazon.com/images/I/61Qea+MVbGL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Ética e cidadania",
      autor: "Herbert de Souza",
      link: "https://m.media-amazon.com/images/I/51q4FkgI+mL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Os 5s do coração",
      autor: "Jose haddad",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyp92-Or0Im8qcZiMA8UMz5Il5VPgfVkuqg&s",
    },
    {
      nome: "Responsabilidade e Empreendedorismo",
      autor: "Gabriel chalita",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLNpXboZGwaETUvOo0Q1nG09FGx8bsT8rKA&s",
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
