// Array de livros
const bancoDeLivros = [
  {
    id: 1,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    capa: "https://picsum.photos/id/237/200/300"  // Link para a imagem da capa
  },
  {
    id: 2,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    capa: "https://picsum.photos/id/238/200/300"
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    capa: "https://picsum.photos/id/239/200/300"
  },
  {
    id: 4,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    capa: "https://picsum.photos/id/240/200/300"
  },
  {
    id: 5,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    capa: "https://picsum.photos/id/241/200/300"
  }
];

// Função para preencher os livros no HTML
function preencherLivros() {
  const livrosContainer = document.querySelector('.books'); // Seleciona o contêiner onde os livros serão adicionados
  livrosContainer.innerHTML = ''; // Limpa os livros existentes

  // Itera sobre o array de livros e cria os elementos HTML
  bancoDeLivros.forEach(livro => {
    const livroElement = document.createElement('div'); // Cria o elemento do livro
    livroElement.classList.add('book'); // Adiciona a classe 'book'

    // Adiciona o conteúdo HTML dentro do 'livroElement'
    livroElement.innerHTML = `
      <img src="${livro.capa}" alt="${livro.titulo}">
      <p>${livro.titulo}<br /><b>${livro.autor}</b></p>
    `;

    // Adiciona o livro ao contêiner
    livrosContainer.appendChild(livroElement);
  });
}

// Chama a função para preencher os livros ao carregar a página
document.addEventListener('DOMContentLoaded', preencherLivros);
