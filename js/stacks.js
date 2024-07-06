// ----------- BOTÕES DE STACK ----------- //
const stacks = [
  {
    img: "fa-brands fa-html5",
    name: "HTML",
    description:
      "HTML (HyperText Markup Language) é uma linguagem de marcação usada para criar páginas da web. Ele permite adicionar texto, imagens, vídeos e outros elementos a uma página da web, e estruturá-los com elementos como títulos, parágrafos, listas e tabelas. HTML é a base da maioria das páginas da web e é interpretado pelo navegador para exibir o conteúdo da página ao usuário.",
  },
  {
    img: "fa-brands fa-css3-alt",
    name: "CSS",
    description:
      "CSS (Cascading Style Sheets) é um linguagem de estilo utilizada para descrever a apresentação de documentos HTML ou XML. Ele permite definir como elementos devem ser exibidos em uma página web, incluindo cores, fontes, layouts e muito mais. CSS ajuda a separar o conteúdo de uma página da sua apresentação, tornando o design da página mais flexível e fácil de manter.",
  },
  {
    img: "fa-brands fa-square-js",
    name: "Javascript",
    description:
      "JavaScript é uma linguagem de programação interpretada e de alto nível. É amplamente utilizada para criar interatividade em páginas da web, bem como para desenvolver aplicações front-end e back-end. É uma das linguagens de programação mais populares e versáteis na atualidade.",
  },
  {
    img: "fa-brands fa-react",
    name: "React",
    description:
      "React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.",
  },
  {
    img: "fa-brands fa-node-js",
    name: "Node",
    description:
      "Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador. Com ele, é possível criar praticamente qualquer tipo de aplicações web, desde servidores para sites estáticos e dinâmicos, até APIs e sistemas baseados em microserviços.",
  },
  {
    img: "fa-solid fa-database",
    name: "SQL",
    description:
      "SQL (Structured Query Language) é uma linguagem de consulta estruturada usada para gerenciar e manipular bancos de dados relacionais. Ela permite executar operações como inserção, atualização, exclusão e consulta de dados. SQL é essencial para interagir com sistemas de gerenciamento de banco de dados, como MySQL, PostgreSQL e Oracle.",
  },
];

const iconImg = document.querySelector(".stack-about .img-bx i");
const title = document.querySelector(".stack-about .text-bx h1");
const description = document.querySelector(".stack-about .text-bx p");

const btns = document.querySelectorAll(".names-btn .btn");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btns.forEach((bt) => bt.classList.remove("click"));

    btn.classList.add("click");
    iconImg.setAttribute("class", stacks[index].img);
    title.textContent = stacks[index].name;
    description.textContent = stacks[index].description;
  });
});
