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

function updateStatus() {
  const items = document.querySelectorAll("#status li");

  items.forEach(item => {
    if (item.textContent.includes("Frontend")) {
      item.textContent = "Frontend: OK";
      item.className = "status-ok";
    }
    if (item.textContent.includes("Backend")) {
      item.textContent = "Backend: offline (symulacja)";
      item.className = "status-offline";
    }
    if (item.textContent.includes("Model ML")) {
      item.textContent = "Model ML: offline (symulacja)";
      item.className = "status-offline";
    }
  });
}

updateStatus();
setInterval(() => {
  console.log("Odświeżam statusy...");
  updateStatus();
}, 5000);

async function checkBackend() {
  try {
    // docelowy endpoint: http://localhost:8000/heartbeat
    const response = await fetch("https://example.com/heartbeat");

    if (!response.ok) {
      throw new Error("Backend offline");
    }

    const data = await response.json();

    // oczekiwany format:
    // { status: "ok" }
    const backendItem = document.querySelector("#status li:nth-child(2)");

    if (data.status === "ok") {
      backendItem.textContent = "Backend: OK";
      backendItem.className = "status-ok";
    } else {
      backendItem.textContent = "Backend: problem";
      backendItem.className = "status-offline";
    }

  } catch (err) {
    const backendItem = document.querySelector("#status li:nth-child(2)");
    backendItem.textContent = "Backend: offline";
    backendItem.className = "status-offline";
  }
}

