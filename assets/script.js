console.log("trading-dev: JS działa poprawnie");

const app = document.getElementById("app");
const info = document.createElement("p");
info.textContent = "JS działa — dynamiczny tekst został dodany.";
app.appendChild(info);

/* -------------------------------------------------------
   FUNKCJA 1: Status frontendu / backendu / modelu ML
------------------------------------------------------- */
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

/* -------------------------------------------------------
   FUNKCJA 2: Sprawdzanie backendu FastAPI
------------------------------------------------------- */
async function checkBackend() {
  const backendItem = document.querySelector("#status li:nth-child(2)");

  try {
    const response = await fetch("http://127.0.0.1:8000/heartbeat");

    if (!response.ok) {
      throw new Error("Backend offline");
    }

    const data = await response.json();

    if (data.status === "ok") {
      backendItem.textContent = "Backend: OK";
      backendItem.className = "status-ok";
    } else {
      backendItem.textContent = "Backend: problem";
      backendItem.className = "status-offline";
    }
  } catch (err) {
    backendItem.textContent = "Backend: offline";
    backendItem.className = "status-offline";
  }
}

/* -------------------------------------------------------
   FUNKCJA 3: Status modelu ML (placeholder)
------------------------------------------------------- */
function checkModel() {
  const modelItem = document.querySelector("#status li:nth-child(3)");
  modelItem.textContent = "Model ML: offline (placeholder)";
  modelItem.className = "status-offline";
}

/* -------------------------------------------------------
   AUTOMATYCZNE ODŚWIEŻANIE STATUSÓW
------------------------------------------------------- */

// 1. Frontend / symulacje
setInterval(() => {
  console.log("Odświeżam statusy...");
  updateStatus();
}, 5000);

// 2. Backend FastAPI
setInterval(() => {
  checkBackend();
}, 5000);

// 3. Model ML (placeholder)
setInterval(() => {
  checkModel();
}, 5000);

// Pierwsze wywołanie
updateStatus();
checkBackend();
checkModel();
