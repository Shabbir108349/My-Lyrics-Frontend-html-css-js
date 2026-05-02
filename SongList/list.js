const urlParams = new URLSearchParams(window.location.search);
const receive = urlParams.get("id");

document.getElementById('h2').innerText = `🎵 ${receive} Songs`;

const songGrid = document.getElementById("songGrid");
const searchInput = document.getElementById("songInput");

let allSongs = [];

// 🌙 Dark mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🔄 Fetch songs
async function fetchSongs(genre) {
  let res;
  if(genre === "Popular"){
    res = await fetch(`https://my-lyrics-backend-node-js.vercel.app/api/v2/song/list/popular/${true}`)
  }else{
    res = await fetch(`https://my-lyrics-backend-node-js.vercel.app/api/v2/song/list/${genre}`);
  }
  
  const data = await res.json();



  allSongs = Array.isArray(data) ? data : data.data;


  renderSongs(allSongs);
}

fetchSongs(receive);


searchInput.addEventListener('input', () => {

  if (!allSongs.length) return; // 🛑 important

  const value = searchInput.value.toLowerCase();

  const filtered = allSongs.filter(song =>
    song.title.toLowerCase().includes(value) ||
    song.artist.toLowerCase().includes(value) ||
    song.genre.toLowerCase().includes(value) ||
    song.language.toLowerCase().includes(value)
  );

  renderSongs(filtered);
});

// 🎵 Render songs
function renderSongs(songs) {
  songGrid.innerHTML = "";

  if (!songs || songs.length === 0) {
    songGrid.innerHTML = `<h3 style="text-align:center;""padding-top: 100px;""padding-left: 100px;">No song found 😢</h3>`;
    return;
  }

  songs.forEach(song => {
    const div = document.createElement("div");
    div.className = "songCard";

    const thumb = `https://img.youtube.com/vi/${song.videoId}/hqdefault.jpg`;

    div.innerHTML = `
      <img class="songThumb" src="${thumb}">
      <div>
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
        <span>${song.genre} • ${song.language}</span>
      </div>
    `;

    div.onclick = () => {
      window.location.href = `../Watch/watch.html?id=${song.songId}`;
    };

    songGrid.appendChild(div);
  });
}