// ----------- RENDERIZANDO OS PROJETOS ----------- //
const projects = [
    {
        img: 'retromusicplayer.png',
        name: "Retro Music Player",
        link: 'https://retromusicplayer.netlify.app/'
    },
    {
        img: 'rypokedex.png',
        name: "Pokédex",
        link: 'https://rypokedex.netlify.app/'
    },
    {
        img: 'kenai.png',
        name: "Kenai plus",
        link: 'https://kenaiplus.netlify.app/'
    },
    {
        img: 'clima.png',
        name: "Search Weather",
        link: 'https://searchweathersite.netlify.app/'
    },
    {
        img: 'pizzas.png',
        name: "RyPizzas",
        link: 'https://ryannbenjamim.github.io/RyPizzas/index.html'
    },
    {
        img: 'tiktaktoe.png',
        name: "TikTakToe",
        link: 'https://ryannbenjamim.github.io/TikTakToe/'
    },
    {
        img: 'finance.png',
        name: "Finance Week",
        link: 'https://ryannbenjamim.github.io/FinanceWeek/'
    },
    {
        img: 'iaimt.png',
        name: "Encontro IAIMT",
        link: 'https://encontroiaimt.netlify.app/'
    },
    {
        img: 'blackmirror.png',
        name: "Black Mirror",
        link: 'https://ryannbenjamim.github.io/BlackMirror/'
    },
    {
        img: 'hardpassword.png',
        name: "Hard Password",
        link: 'https://ryannbenjamim.github.io/HardPassword/'
    },
    {
        img: 'todolist.png',
        name: "TodoList",
        link: 'https://ryannbenjamim.github.io/TodoList/'
    },
    {
        img: 'sonstv.png',
        name: "Sons da Tv",
        link: 'https://ryannbenjamim.github.io/Tv_Sound_Effects/'
    },
    {
        img: 'musicplayer.png',
        name: "RyPlay",
        link: 'https://ryannbenjamim.github.io/MusicPlayerJS/'
    },
]

const container = document.querySelector('.projects-container')

projects.forEach((project) => {
    const box = document.createElement('div')
    box.classList.add('box')
    box.setAttribute('data-aos', 'fade-right')
    box.setAttribute('data-aos-duration', '1200')

    const img = document.createElement('img')
    img.src = `images/projects/${project.img}`

    const text_bx = document.createElement('div')
    text_bx.classList.add('text-bx')

    const h1 = document.createElement('h1')
    h1.id = 'name'
    h1.textContent = project.name

    const a = document.createElement('a')
    a.href = project.link
    a.target = '_blank'
    a.innerHTML = '<div class="button"><i class="fa-solid fa-link"></i> Visualizar</div>'

    text_bx.append(h1, a)
    box.append(img, text_bx)
    container.appendChild(box)
})