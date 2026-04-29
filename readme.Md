# 🎵 My Lyrics — Frontend

A modern and responsive lyrics web application UI built using **HTML, CSS, and JavaScript**.  
This frontend connects with a Spring Boot backend to fetch and display songs, lyrics, and video content.

---

## 🚀 Features

- 🔍 **Universal Search**
  - Live search suggestions
  - Redirect to result page
  - Search by title, artist, genre, language

- 🎵 **Song Sections**
  - Popular songs
  - Genre-based categories (Bangla, Hindi, English, etc.)
  - Upload Song
  - Edit Song's Lyrics and other information

- ▶️ **Video Integration**
  - Embedded YouTube player
  - Dynamic video loading using `videoId`
  - Dynamic Thumbnail loading using `videoId` from youtube's official website

- 📄 **Lyrics Viewer**
  - Clean formatted lyrics display
  - Supports multi-line and styled content
  - Related Song Recommendation 

- 📱 **Responsive Design**
  - Mobile-friendly layout
  - Top-to-bottom stacking on small devices

- 🌙 **Dark Mode**
  - Toggle between light and dark theme

- 📌 **Recommendation Section**
  - Suggested songs with thumbnails

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript (ES6)
- Fetch API


---

## ⚙️ How to Run (Frontend)

### ✅ Option 1: Simple Open
1. Download or clone this repository
    ```bash
    https://github.com/Shabbir108349/My-Lyrics-Frontend-html-css-js.git
    ```
2. Open `Home/landing.html` in your browser

---

### ✅ Option 2: Live Server (Recommended)

If you're using VS Code:

1. Install **Live Server Extension**
2. Right click on `Home/landing.html`
3. Click **"Open with Live Server or Live Preview"**

---

## 🔗 Backend API (Required)

This frontend depends on a backend API.

👉 Backend Repository:  
    https://github.com/Shabbir108349/My-Lyrics-Backend-SpringBoot

    
👉 Make sure backend is running on:
```bash
http://localhost:8080
```

---

## 🔌 API Endpoints Used(main)

| Feature | Endpoint |
|--------|--------|
| Universal Search on Landing page | `/api/search?query=${query}` |
| Get popular | `/api/v2/song/home/popular` |
| Get by genre | `/api/v2/song/home/{genre}` |
| Get single song | `/api/get-song-by-id/${songId}` |

---

## ⚠️ Important Notes

- Backend must be running before using Frontend
- CORS must be enabled in backend
- Internet required for YouTube video embedding
- Some demo song already given with the file nameed **song3.json,song1.js,song2.js**

---

## 📸 Demo Flow

1. Open homepage  
2. Browse songs OR search  
3. Click a song  
4. View lyrics + video  

---

## 👨‍💻 Developer Notes

- All rendering is dynamic using JavaScript
- No frameworks used (pure JS)
- Easy to extend (React/Vue migration possible)

---

## 📬 Contact

- GitHub: https://github.com/Shabbir108349
- Email: shabbirhassain24@gmail.com
- LinkedIn: https://linkedin.com/in/shabbir108349
---

## ⭐ Contribution

Feel free to fork and improve this project.

---

## 📜 License

This project is open-source and free to use.
