
const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get("id");

const songName = document.getElementById('songName')
const lyricsBox = document.getElementById('lyricsBox')
const toggleBtn = document.getElementById("themeToggle");
const videoPlayer = document.getElementById("videoPlayer")
const serach = document.getElementById('serach-icon')
const container = document.querySelector(".recommendationcontainer");



toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // optional icon change
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀️";
    } else {
        toggleBtn.innerText = "🌙";
    }
});

// serach.addEventListener('click',searchSong)

async function searchSong(id) {
  
    const res = await fetch(`https://my-lyrics-backend-node-js.vercel.app/api/get-song-by-id/${id}`);
    const data = await res.json();
   
    if (data) {
        songName.style.display = "block";
        lyricsBox.style.display = "block";
        songName.innerText = data.title;
        document.title = "Lyrics- "+data.title;
        const l = data.lyrics.replaceAll("\\n", "\n");
        lyricsBox.innerHTML = l;
        const link = `https://www.youtube.com/embed/${data.videoId}`;
    
        videoPlayer.src = link;
        container.innerHTML = '';
        recommendSong(data.genre,id);
    } else {
        lyricsBox.style.display = "inline";
        lyricsBox.innerText = "Lyrics not found";
    }
}

searchSong(songId);

async function recommendSong(genre,id) {
    const res = await fetch(`https://my-lyrics-backend-node-js.vercel.app/api/get-recommend-song/${genre}/${id}`)

    const data = await res.json();
    data.forEach(song => {
        addSong(song.title,song.videoId,song.songId,song.artist);
    });
}


function addSong(title, videoId,songId,artist) {
    const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    const div = document.createElement("div");
    div.className = "songItem";

    div.innerHTML = `
    <img class="songThumb" src="${thumb}">
    <div>
        <h3>${title}</h3>
        <p> Artist: ${artist}</p>
      </div>
  `;

    div.onclick = ()=>{
        window.location.href = `watch.html?id=${songId}`
    }

    container.appendChild(div);
}


