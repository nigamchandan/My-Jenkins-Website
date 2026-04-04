// Deployment Time
document.getElementById("time").innerHTML =
    new Date().toLocaleString();

// Version Fetch
fetch("./version.txt")
    .then(res => res.text())
    .then(data => {
        document.getElementById("version").innerText = data;
    });

// Fake API Check
setTimeout(() => {
    document.getElementById("api").innerText = "✅ API Running";
}, 1000);