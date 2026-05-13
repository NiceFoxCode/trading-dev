console.log("trading-dev: JS działa poprawnie");
const app = document.getElementById("app");

const info = document.createElement("p");
info.textContent = "JS działa — dynamiczny tekst został dodany.";

app.appendChild(info);
function updateStatus() {
  const items = document.querySelectorAll("#status li");

  items.forEach(item => {
    if (item.textContent.includes("Frontend")) {
      item.textContent = "Frontend: OK";
    }
    if (item.textContent.includes("Backend")) {
      item.textContent = "Backend: offline (symulacja)";
    }
    if (item.textContent.includes("Model ML")) {
      item.textContent = "Model ML: offline (symulacja)";
    }
  });
}

updateStatus();
