let cats = 0;
let autoClickers = 0;
let multiplier = 1;
let autoClickerCost = 10;
let multiplierCost = 50;

function updateDisplay() {
  document.getElementById("cat-count").textContent = Math.floor(cats);
  document.getElementById("cats-per-second").textContent = (
    autoClickers * multiplier
  ).toFixed(1);

  // Update button states
  document.getElementById("auto-clicker").disabled = cats < autoClickerCost;
  document.getElementById("multiplier").disabled = cats < multiplierCost;
}

function clickCat() {
  cats += 1 * multiplier;
  updateDisplay();
}

function buyAutoClicker() {
  if (cats >= autoClickerCost) {
    cats -= autoClickerCost;
    autoClickers += 1;
    autoClickerCost = Math.floor(autoClickerCost * 1.2);
    document.getElementById(
      "auto-clicker"
    ).textContent = `Buy Auto Clicker (Cost: ${autoClickerCost} cats)`;
    updateDisplay();
  }
}

function buyMultiplier() {
  if (cats >= multiplierCost) {
    cats -= multiplierCost;
    multiplier += 0.5;
    multiplierCost = Math.floor(multiplierCost * 1.5);
    document.getElementById(
      "multiplier"
    ).textContent = `Buy Multiplier (Cost: ${multiplierCost} cats)`;
    updateDisplay();
  }
}

// Auto clicker interval
setInterval(() => {
  cats += (autoClickers * multiplier) / 10;
  updateDisplay();
}, 100);

// Set up click handler
document.getElementById("cat-image").addEventListener("click", clickCat);
