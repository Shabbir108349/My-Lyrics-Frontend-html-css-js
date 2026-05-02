const myLyrics = document.querySelector('.logo')

const searchInput = document.getElementById("songInput");
const suggestionBox = document.getElementById("suggestions");

let timer;

searchInput.addEventListener("input", () => {
  clearTimeout(timer);

  timer = setTimeout(async () => {
    const query = searchInput.value.trim();

    if (query.length < 2) {
      suggestionBox.style.display = "none";
      return;
    }

    const res = await fetch(`https://my-lyrics-backend-node-js.vercel.app/api/search?query=${query}`);
    const data = await res.json();
    console.log(data);

    renderSuggestions(data);

  }, 300);
});

function renderSuggestions(songs) {
  suggestionBox.innerHTML = "";

  if (!songs || songs.length === 0) {
    suggestionBox.style.display = "block";
    suggestionBox.innerHTML = `<div class="suggestionItem">No result</div>`;
    return;
  }

  songs.slice(0, 5).forEach(song => {
    const div = document.createElement("div");
    div.className = "suggestionItem";

    div.innerHTML = `
      <strong>${song.title}</strong> - ${song.artist}
    `;

    // 🔥 CLICK → GO TO SEARCH PAGE
    div.onclick = () => {
      window.location.href = `../Watch/watch.html?id=${encodeURIComponent(song.songId)}`;
    };

    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = "block";
}



const popularbtn = document.getElementById('popularbtn')
const banglamoviebtn = document.getElementById('banglamoviebtn')
const banglafolkbtn = document.getElementById('banglafolkbtn')
const banglaalbumbtn = document.getElementById('banglaalbumbtn')
const englishbtn = document.getElementById('englishbtn')
const hindimoviebtn = document.getElementById('hindimoviebtn')
const hindialbumbtn = document.getElementById('hindialbumbtn')
const nasheedbtn = document.getElementById('nasheedbtn')
const banglagozolbtn = document.getElementById('banglagozolbtn')
const urdudramabtn = document.getElementById('urdudramabtn')
const banglageetbtn = document.getElementById('banglageetbtn')

popularbtn.addEventListener('click',()=>{
  window.location.href=`../SongList/list.html?id=Popular`
})
banglamoviebtn.addEventListener('click',()=>{
  globalListPage("Bangla Movie");
})
banglafolkbtn.addEventListener('click',()=>{
  globalListPage("Bangla Folk");
})
banglaalbumbtn.addEventListener('click',()=>{
  globalListPage("Bangla Album");
})
englishbtn.addEventListener('click',()=>{
  globalListPage("English");
})
hindimoviebtn.addEventListener('click',()=>{
  globalListPage("Hindi Movie");
})
hindialbumbtn.addEventListener('click',()=>{
  globalListPage("Hindi Album");
})
nasheedbtn.addEventListener('click',()=>{
  globalListPage("Nasheed");
})
banglagozolbtn.addEventListener('click',()=>{
  globalListPage("Bangla Gozol");
})
urdudramabtn.addEventListener('click',()=>{
  globalListPage("Urdu Drama");
})
banglageetbtn.addEventListener('click',()=>{
  globalListPage("Bangla Geet");
})


function globalListPage(genre){
  window.location.href=`../songList/list.html?id=${genre}`
}

myLyrics.addEventListener('click', toggleDrawer);
function toggleDrawer() {
  document.getElementById("drawer").classList.toggle("open");
}

// 🌙 Dark mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

async function getPopularSong(genre,bool) {
  const res = await fetch(`https://my-lyrics-backend-node-js.vercel.app/api/v2/song/home/popular/${bool}`);
  const data = await res.json();
  viewRender(data, genre.toLowerCase());

}

async function getFiveSpecificSong(genre) {
  const res = await fetch(`https://my-lyrics-backend-node-js.vercel.app/api/v2/song/home/${genre}`);
  const data = await res.json();
  const placeHolder= genre.replace(' ',"").toLowerCase();
  viewRender(data, placeHolder);

}


function viewRender(data, place) {
  let container = document.getElementById(place)

  data.forEach(song => {
    const div = document.createElement('div')
    div.className = "songCard"

    const thumb = `https://img.youtube.com/vi/${song.videoId}/hqdefault.jpg`

    div.innerHTML = `
    <img class="songThumb" src="${thumb}">
    <div>
      <h3>${song.title}</h3>
      <p>Artist: ${song.artist}</p>
      <span>${song.genre} • ${song.language}</span>
    </div>
  `;

    div.onclick = () => {
      window.location.href = `../Watch/watch.html?id=${song.songId}`;
    }

    container.appendChild(div);

  })

}

getPopularSong("Popular",true);
getFiveSpecificSong("Bangla Movie");
getFiveSpecificSong("Bangla Folk");
getFiveSpecificSong("Bangla Album");
getFiveSpecificSong("English");
getFiveSpecificSong("Hindi Movie");
getFiveSpecificSong("Hindi Album");
getFiveSpecificSong("Nasheed");
getFiveSpecificSong("Bangla Gozol");
getFiveSpecificSong("Urdu Drama");
getFiveSpecificSong("Bangla Geet");
