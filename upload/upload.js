document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // ✅ FIX: convert checkbox to boolean
  data.popular = formData.get("isPopular") === "on";

  console.log("Sending data:", data);

  try {
    const res = await fetch("http://192.168.0.121:8080/api/shabbir/add-song", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    if (res.ok) {
      alert("✅ Song uploaded successfully!");
      e.target.reset();
    } else {
      alert("❌ Upload failed");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Server error");
  }
});