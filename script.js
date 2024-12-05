const books = [
  {
    title: "Administração de Redes Remotas",
    author: " Alexandre Fernandes",
    genre: "Redes",
    shelf: "A",
    rack: "1",
    cover:
      "https://m.media-amazon.com/images/I/61eMGgRceaL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Administração de Redes Locais",
    author: "Lindeberg Barros de Sousa",
    genre: "Redes",
    shelf: "B",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/81y1KSJ3a7L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "SQL Curso Prático",
    author: "Celso Henrique Poderoso de Oliveira",
    genre: "Banco de Dados",
    shelf: "C",
    rack: "3",
    cover:
      "https://m.media-amazon.com/images/I/61no2mAsdhL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Cabeamento Estruturado",
    author: "Paulo Sérgio Marin",
    genre: "Redes",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/61ra5ijsJSL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Informática Qualificação Profissional",
    author: "Kariane de Oliveira- Luciane Mendonça- Wellington da Silva Rehder",
    genre: "Informática",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYC_1q4IzlqiDicJq3dhcPIxvhaXaBPSNrQ&s",
  },
  {
    title: "Algoritmos",
    author: "José Augusto  N.G  Manzano e Jayr figueiredo de Oliveira ",
    genre: "Programação",
    shelf: "A",
    rack: "2",
    cover:
      "https://www.editoradodireito.com.br/media/catalog/product/9/7/9788536531458.44_1.png?optimize=low&bg-color=255,255,255&fit=bounds&height=1000&width=700&canvas=700:1000",
  },
  {
    title: "Lógica de Programação (Aprendendo a Programar)",
    author: "Camila Ceccatto da Silva e Everaldo Antônio de Paula",
    genre: "Programação",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/91TAMhF4A5L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Programação Orientada a Objetos em JAVA",
    author: "Isaias Camilo Boratti",
    genre: "Programação",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToijEroY4G3n4-q3nXPlWN_S-klrp4p11psA&s",
  },
  {
    title: "Desenvolvimento para Web com Java",
    author: "Everton Coimbra de Araújo",
    genre: "Programação",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4ol7ny2ArNUNiwCHSYcvK68ejh3-T7Q5mA&s",
  },
  {
    title: "Consertando Micros  2ª Edição",
    author: "Laércio Vasconcelos",
    genre: "Hardware",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/71eDZ0WwBwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "O Guia dos Curiosos",
    author: "Marcelo Duarte",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/51eCdB3XX2L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Redes Sem Fio",
    author: "Alexandre Fernandes de Moraes",
    genre: "Redes",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhQuBsjWaL2IZBkV-qWeHsUNs6cbjOGQMhg&s",
  },
  {
    title: "Redes de Computadores Fundamentos",
    author: "Alexandre Fernandes de Moraes",
    genre: "Redes",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/81yZItHCjUL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Segurança em Informática e de Informações",
    author: "Caruso e Steffen",
    genre: "Informática",
    shelf: "A",
    rack: "2",
    cover: "https://m.media-amazon.com/images/I/81VrMic2SsL.jpg",
  },
  {
    title: "Guia de Internet de Conectividade 11ª Edição",
    author: "Senac",
    genre: "Informática",
    shelf: "A",
    rack: "2",
    cover: "https://images-na.ssl-images-amazon.com/images/I/517vO4kbi3L.jpg",
  },
  {
    title: "Introdução ao Gerenciamento de Ambientes Computacionais",
    author: "Becsom Salles de Carvalho",
    genre: "Informática",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/817i916jgFL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "CCNA ICND2",
    author: "Wendell Odom",
    genre: "Informática",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/61FWnvAeAqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Banco de Dados Teoria e Desenvolvimento",
    author: "William Perreira Alves",
    genre: "Banco de Dados",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/61e1YhJW8oL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Construindo sites com CSS e (X) HTML",
    author: "Mauricio Samy Silva",
    genre: "Programação",
    shelf: "A",
    rack: "2",
    cover:
      "https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575221396.jpg",
  },
  {
    title: "Excel 2016 Avançado",
    author: "Camila Ceccatto da Silva Perez",
    genre: "Pacote Office",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/51MGszp+yUL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Manual Prático de Redes",
    author: "Laércio Vasconcelos e Marcelo Vasconcelos",
    genre: "Redes",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/61pac331GNL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Servidores Linux",
    author: "Carlos Eduardo Morimoto",
    genre: "Programação",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Zw-r8MezODmZqlIEmOcHHBhwnJcj9bmmoQ&s",
  },
  {
    title: "Manutenção de micros na prática",
    author: "Laércio Vasconcelos",
    genre: "Hardware",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LmroePog2HAhujSDTubqaLvaYzn9-jq-ag&s",
  },
  {
    title: "Rede de computadores - Tecnologia e Convergência das Redes",
    author: "Amir Wirth Lima Junior",
    genre: "Redes",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/61nuKWWy9bL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "300 Superdicas de Editoração, Design e Artes Gráficas 4ª edição",
    author: "Ricardo Minoru Horie Ricardo Pagemaker Pereira",
    genre: "Design",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGiZVPjiQmt17D9VbdSHJ5JhAmoiPSPWm4w&s",
  },
  {
    title: "Programando em PHP Manual passo-a-passo",
    author: "Fábio Burch Salvador",
    genre: "Programação",
    shelf: "A",
    rack: "2",
    cover: "https://imagens.disal.com.br/produtos/ampliada/4304565.jpg",
  },
  {
    title: "AutoCad 2013",
    author: "Rosa Katori",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/41ne7g40TiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "CCNENT/CCNA ICND1",
    author: "Wendell Odom",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/619vtrW9BDL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Raspberry PI",
    author:
      "Cláudio Vieira de Oliveira, Humberto Augusto P. Zanetti e Cristina Becker Matos Nabarro",
    genre: "Informática",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4CznK-lqYKPdbAJUzGROMsU3njxqEGLNiw&s",
  },
  {
    title: "O livro dos manuais",
    author: "Paulo Coelho",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHxE41GTTDX2iG_ydPhrOQ5hzDt9SuYg7ig&s",
  },
  {
    title: "Não nascemos prontos",
    author: "Mario Sergio Cortella",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover: "https://m.media-amazon.com/images/I/71ZWwsehofL.jpg",
  },
  {
    title: "Simples filosofia",
    author: "Pablo Capistrano",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/51a739gaNCL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "A traição dos intelectuais",
    author: "Julien Benda",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/51SLQK0dGOL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Cooperação e Igualdade",
    author: "Gabriel chalita",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/61r3hXjxA7L._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Não espere pelo epitáfio",
    author: "Mario Sergio Cortella",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/71Y2ekm7F0L._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Respeito e Convivência",
    author: "Gabriel chalita",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/71ZxPBdlmaL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Pensar bem nos faz bem",
    author: "Mario Sergio Cortella",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/715XxxH1-aL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Curso de Iniciação logosófica",
    author: "Carlos Bernardo gonzález pecotche",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXayr_blD35PYAEQS0K6n_hgTaFWs-XTExQ&s",
  },
  {
    title: "O cérebro emocional",
    author: "Gilberto Ururahy e Éric Albert",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://http2.mlstatic.com/D_NQ_NP_952247-MLU74245603671_012024-O.webp",
  },
  {
    title: "Sem Limite",
    author: "Jim kwik",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://m.media-amazon.com/images/I/61Qea+MVbGL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Ética e Cidadania",
    author: "Herbert de souza (betinho) e Carla rodrigues",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKchP_NI5aP0KV6wpOMSfBReRmTMJ0crjzA&s",
  },
  {
    title: "Os 5s do coração",
    author: "Jose haddad",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover: "https://m.media-amazon.com/images/I/61C0iA5F3lL.jpg",
  },
  {
    title: "Responsabilidade e Empreendedorismo",
    author: "Gabriel chalita",
    genre: "Conhecimento",
    shelf: "A",
    rack: "2",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLNpXboZGwaETUvOo0Q1nG09FGx8bsT8rKA&s",
  },
];

const authors = [...new Set(books.map((book) => book.author))];
const genres = [...new Set(books.map((book) => book.genre))];

function populateSelects() {
  const authorSelect = document.getElementById("authorSelect");
  const genreSelect = document.getElementById("genreSelect");

  authors.forEach((author) => {
    const option = document.createElement("option");
    option.value = author;
    option.textContent = author;
    authorSelect.appendChild(option);
  });

  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

function displayBooks(filter = {}) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  const filteredBooks = books.filter((book) => {
    const matchesAuthor = !filter.author || book.author === filter.author;
    const matchesGenre = !filter.genre || book.genre === filter.genre;
    const matchesSearch =
      !filter.search ||
      book.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      book.author.toLowerCase().includes(filter.search.toLowerCase());

    return matchesAuthor && matchesGenre && matchesSearch;
  });

  filteredBooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" />
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;
    bookDiv.onclick = () => showPopup(book);
    bookList.appendChild(bookDiv);
  });
}

function showPopup(book) {
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popupContent");

  popupContent.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>
        <h3>Detalhes do Livro</h3>
        <table>
            <tr>
                <th>Estante</th>
                <td>${book.shelf}</td>
            </tr>
            <tr>
                <th>Prateleira</th>
                <td>${book.rack}</td>
            </tr>
        </table>
    `;

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Event listeners
document.getElementById("search").addEventListener("input", (e) => {
  displayBooks({ search: e.target.value });
});

document.getElementById("authorSelect").addEventListener("change", (e) => {
  displayBooks({ author: e.target.value });
});

document.getElementById("genreSelect").addEventListener("change", (e) => {
  displayBooks({ genre: e.target.value });
});

// Preencher os selects e inicializar a exibição dos livros
populateSelects();
displayBooks();
