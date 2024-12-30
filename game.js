document.addEventListener("DOMContentLoaded", () => {
  let coins = 0;
  let autoClickers = 0;
  let multiplier = 1;
  let autoClickerCost = 10;
  let multiplierCost = 50;
  let multiplierCost2 = 100;

  function updateDisplay() {
    document.getElementById("coin-count").textContent = Math.floor(coins);
    document.getElementById("coins-per-second").textContent = (
      autoClickers * multiplier
    ).toFixed(1);

    // Update button states
    document.getElementById("auto-clicker").disabled = coins < autoClickerCost;
    document.getElementById("multiplier").disabled = coins < multiplierCost;
  }

  function clickCat() {
    coins += 1 * multiplier;
    updateDisplay();
  }

  function buyAutoClicker() {
    if (coins >= autoClickerCost) {
      coins -= autoClickerCost;
      autoClickers += 1;
      autoClickerCost = Math.floor(autoClickerCost * 1.2);
      document.getElementById(
        "auto-clicker"
      ).textContent = `Auto Clicker (Cost: ${autoClickerCost} coins)`;
      updateDisplay();
    }
  }

  function buyMultiplier() {
    if (coins >= multiplierCost) {
      coins -= multiplierCost;
      multiplier += 0.5;
      multiplierCost = Math.floor(multiplierCost * 1.5);
      document.getElementById(
        "multiplier"
      ).textContent = `Multiplier (Cost: ${multiplierCost} coins)`;
      updateDisplay();
    }
  }

  function buyMultiplier2() {
    if (coins >= multiplierCost) {
      coins -= multiplierCost;
      multiplier += 1;
      multiplierCost = Math.floor(multiplierCost * 2);
      document.getElementById(
        "multiplier"
      ).textContent = `Multiplier (Cost: ${multiplierCost} coins)`;
      updateDisplay();
    }
  }

  // Auto clicker interval
  setInterval(() => {
    coins += (autoClickers * multiplier) / 10;
    updateDisplay();
  }, 100);

  document.getElementById("cat-image").addEventListener("click", clickCat);
});
