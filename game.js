const gameState = {
  gold: 0,
  goldPerClick: 1,
  goldPerSecond: 0,
  globalMultiplier: 1,
  upgrades: {}, // Each upgrade's details will be stored here
};

function handleClick() {
  gameState.gold += gameState.goldPerClick * gameState.globalMultiplier;
  updateUI();
}

function purchaseMultiplier(multiplierName) {
  const multiplier = multiplierUpgrades[multiplierName];
  if (gameState.gold >= multiplier.cost) {
    gameState.gold -= multiplier.cost;
    gameState.globalMultiplier *= multiplier.multiplier;
    updateUI();
  }
}

function purchaseUpgrade(upgradeName) {
  const upgrade = upgrades[upgradeName];
  if (gameState.gold >= upgrade.cost) {
    gameState.gold -= upgrade.cost;
    gameState.goldPerSecond +=
      upgrade.goldPerSecond * gameState.globalMultiplier;

    gameState.upgrades[upgradeName] =
      (gameState.upgrades[upgradeName] || 0) + 1;
    updateUI();
  } else {
    console.log("Not enough gold!");
  }
}

function generateGold() {
  gameState.gold += (gameState.goldPerSecond * gameState.globalMultiplier) / 10; // Called every 100ms
  updateUI();
}
setInterval(generateGold, 100);

function updateUI() {
  document.getElementById("gold-count").innerText = `Gold: ${Math.floor(
    gameState.gold
  )}`;
  document.getElementById(
    "gold-per-second"
  ).innerText = `Gold/sec: ${gameState.goldPerSecond}`;
}
