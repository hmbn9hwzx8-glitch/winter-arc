const today = new Date().toISOString().slice(0,10);

let history = JSON.parse(localStorage.getItem("history") || "{}");

if (!history[today]) {
  history[today] = {};
}

function setVal(key, val) {
  history[today][key] = val;
  localStorage.setItem("history", JSON.stringify(history));
  updateUI();
}

function updateUI() {
  const data = history[today] || {};

  document.querySelectorAll("[data-task]").forEach(el => {
    const key = el.dataset.task;
    const yesBtn = el.querySelector(".yes");
    const noBtn = el.querySelector(".no");

    yesBtn.classList.remove("active");
    noBtn.classList.remove("active");

    if (data[key] === 1) yesBtn.classList.add("active");
    if (data[key] === 0) noBtn.classList.add("active");
  });
}

window.onload = updateUI;
