document.addEventListener("DOMContentLoaded", () => {
  const favButtons = document.querySelectorAll(".fav-btn");
  const favCountEl = document.getElementById("favCount");
  let favCount = 0;

  favButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");

      if (btn.classList.contains("active")) {
        btn.textContent = "❤️"; 
        favCount++;
      } else {
        btn.textContent = "♡"; 
        favCount--;
      }

      favCountEl.textContent = favCount;
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {

  
  let coins = 100;
  const coinCountEl = document.getElementById("coinCount");

  
  const callButtons = document.querySelectorAll(".call-btn");
  const historyList = document.getElementById("historyList");

  callButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const service = btn.dataset.service;
      const number = btn.dataset.number;

      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      
      coins -= 20;
      coinCountEl.textContent = coins;

      
      alert(`Calling ${service} (${number})`);

      
      const li = document.createElement("li");
      li.textContent = `${service} - ${number}`;
      historyList.prepend(li); 
    });
  });

  
  const clearBtn = document.querySelector(".clear-btn");
  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
});

document.addEventListener("DOMContentLoaded", () => {

  let coins = 100;
  const coinCountEl = document.getElementById("coinCount");

  const callButtons = document.querySelectorAll(".call-btn");
  const historyList = document.getElementById("historyList");

  callButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const service = btn.dataset.service;
      const number = btn.dataset.number;

      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      coins -= 20;
      coinCountEl.textContent = coins;

      alert(`Calling ${service} (${number})`);

      const li = document.createElement("li");
      li.textContent = `${service} - ${number}`;
      historyList.prepend(li); 
    });
  });

  
  const clearBtn = document.getElementById("clearHistoryBtn");
  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = ""; 
  });
});
