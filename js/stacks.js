// ----------- BOTÕES DE STACK ----------- //
const stacks = [
    {
        img: 'fa-brands fa-python',
        name: 'Python',
        description: 'Python é uma linguagem de programação de alto nível, de propósito geral e de fácil leitura. É utilizada para aplicações como desenvolvimento web, data science, inteligência artificial, entre outras. É conhecida por ser uma linguagem intuitiva, versátil e poderosa.'
    },
    {
        img: 'fa-brands fa-html5',
        name: 'HTML',
        description: 'HTML (HyperText Markup Language) é uma linguagem de marcação usada para criar páginas da web. Ele permite adicionar texto, imagens, vídeos e outros elementos a uma página da web, e estruturá-los com elementos como títulos, parágrafos, listas e tabelas. HTML é a base da maioria das páginas da web e é interpretado pelo navegador para exibir o conteúdo da página ao usuário.'
    },
    {
        img: 'fa-brands fa-css3-alt',
        name: 'CSS',
        description: 'CSS (Cascading Style Sheets) é um linguagem de estilo utilizada para descrever a apresentação de documentos HTML ou XML. Ele permite definir como elementos devem ser exibidos em uma página web, incluindo cores, fontes, layouts e muito mais. CSS ajuda a separar o conteúdo de uma página da sua apresentação, tornando o design da página mais flexível e fácil de manter.'
    },
    {
        img: 'fa-brands fa-square-js',
        name: 'Javascript',
        description: 'JavaScript é uma linguagem de programação interpretada e de alto nível. É amplamente utilizada para criar interatividade em páginas da web, bem como para desenvolver aplicações front-end e back-end. É uma das linguagens de programação mais populares e versáteis na atualidade.'
    },
    {
        img: 'fa-brands fa-bootstrap',
        name: 'Bootstrap',
        description: 'Bootstrap é uma framework front-end baseada em HTML, CSS e JavaScript que permite o desenvolvimento de interfaces de usuário rapidamente. É amplamente utilizado para criar páginas responsivas e aplicativos da web. Com Bootstrap, é possível aproveitar recursos pré-definidos de estilo e interação, o que facilita o processo de desenvolvimento e agiliza o tempo de entrega.'
    },
    {
        img: 'fa-brands fa-sass',
        name: 'Sass',
        description: 'Sass é uma linguagem de folha de estilo que fornece recursos adicionais como variáveis, mixins, herança de classes e outros, tornando o CSS mais poderoso e fácil de manter. É compilado em CSS, o que significa que o código Sass é convertido em código CSS compatível com navegadores antes de ser entregue ao cliente. Sass é uma alternativa popular ao CSS convencional, especialmente em projetos de grande escala e desenvolvimento de aplicativos web.'
    },
]

const iconImg = document.querySelector('.stack-about .img-bx i')
const title = document.querySelector('.stack-about .text-bx h1')
const description = document.querySelector('.stack-about .text-bx p')

const btns = document.querySelectorAll('.names-btn .btn')

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach(bt => bt.classList.remove('click'))

        btn.classList.add('click')
        iconImg.setAttribute('class', stacks[index].img)
        title.textContent = stacks[index].name
        description.textContent = stacks[index].description
    })
})