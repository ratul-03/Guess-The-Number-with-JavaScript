// Random Number Generate
const randomNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector("#guess").textContent = randomNumber;

// Status Area
const messeage = document.querySelector(".messeage");

// Win Image
const winImage = document.querySelector(".win");

// Hide Image
const hideImage = document.querySelector(".hide");

// Reset Button
const resetBtn = document.querySelector("#again").addEventListener("click", () => {
  location.reload();
});

// Storing Final Result 
const finalResult = document.querySelector("#score");
const initialScore = 0;

// Verify Output
const inputBTN = document.querySelector("#input");
const submitBTN = document.querySelector("#submit");
submitBTN.addEventListener("click", () => {
  // Condition
  const gueaaOutput = parseInt(inputBTN.value);
  if (gueaaOutput === randomNumber) {
    messeage.textContent = "❤️ Correct Number";
    winImage.style.display = "block";
  } else if (gueaaOutput < randomNumber) {
    messeage.textContent = "😔 It's Low Number";
    winImage.style.display = "none";
    hideImage.style.backgroundImage = "url('img/low.png')"
  } else if (gueaaOutput > randomNumber) {
    messeage.textContent = "😎 It's High Number";
    winImage.style.display = "none";
    hideImage.style.backgroundImage = "url('img/high.png')"
  } else {
    messeage.textContent = "😭 Wrong Number";
    winImage.style.display = "none";
  }
});
