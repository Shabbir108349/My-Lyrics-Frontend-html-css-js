const editor = document.getElementById("editor");
  const lines = document.getElementById("lines");

  function updateLines() {
    const count = editor.value.split("\n").length;
    lines.innerHTML = "";

    for (let i = 1; i <= count; i++) {
      lines.innerHTML += "<div>" + i + "</div>";
    }
  }

  editor.addEventListener("input", updateLines);

//   function runCode() {
//     const code = editor.value;
//     const iframe = document.getElementById("output");

//     iframe.srcdoc = code;
//   }

  // Initial lines
//   editor.value = `<!DOCTYPE html>
// <html>
// <body>
//   <h1>Hello World</h1>
//   <script>
//     console.log("JS working!");
//   <\/script>
// </body>
// </html>`;

  updateLines();
