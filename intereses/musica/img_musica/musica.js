// Song data
const songList = [
    {
        title: "Circles [Post Malone]",
        file: "circles.mp3",
        cover: "circles.jpg"

    },
    {
        title: "Chemical [Post Malone]",
        file: "chemical.mp3",
        cover: "chemical.jpg"
    },
    {
        title: "Rock star [Post Malone]",
        file: "rockstar.mp3",
        cover: "rock star.jpg"
    },
    {
        title: "Too young [Post Malone]",
        file: "Too Young.mp3",
        cover: "too young.jpg"
    },
]

//cancion atual
let actualSong = null;

//capturar elementos del Dom para trabjar con Js
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const volumen = document.querySelector('.volumen')
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)


// Escuchar el elemento AUDIO
audio.addEventListener("timeupdate", updateProgress)

//escuchar clicks en los controles
play.addEventListener("click", () =>{
    if (audio.paused){
        playSong()
    }else {
        pauseSong()
    }
})
next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())

//cargar canciones y mostrar el listado 
function loadSongs() {
    songList.forEach((song, index) =>{
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        // Escuchar clicks
        link.addEventListener("click", () => loadSong(index))
        // Añadir a li
        li.appendChild(link)
        // Aañadir li a ul
        songs.appendChild(li)
    })
}
//Cargar canción seleccionada 
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
    changeActiveClass(actualSong, songIndex)
    actualSong = songIndex
    audio.src = "./Songs/" + songList[songIndex].file
    playSong()
    changeCover(songIndex)
    changeSongTitle(songIndex)
    }
}

//barra volumen

volumen.addEventListener('click', function() {
    let vol = this.value
    audio.volume = vol
})

//actualizar progreso barra del progreso de la canción
function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 
}

// Hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

// Actualizar controles
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}


//Reproducir cancion 
function playSong(){
    audio.play()
    updateControls()
}

//Pausar Canción
function pauseSong(){
    audio.pause()
    updateControls()
}

//Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if(lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}

// Cambiar el cover de la cancion
function changeCover(songIndex) {
    cover.src = "./img_musica/" + songList[songIndex].cover
}

//Cambiar el titulo de la canción de la canción
function changeSongTitle(songIndex) {
    title.innerText = songList[songIndex].title
}
// Anterior canción
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}
//Siguiente Canción
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}

// Lanzar siguiente canción cuando se acaba la actual
audio.addEventListener("ended", () => nextSong())


//GO!

loadSongs()