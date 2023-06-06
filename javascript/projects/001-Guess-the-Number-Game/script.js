const xNumber = Math.round(Math.random() * 100);
let counter = 1;
document.querySelector("#btn").addEventListener("click", () => {
  const yourNumber = Number(document.querySelector("#input").value);
  if (xNumber > yourNumber) {
    alert(" up ");
    counter++;
  } else if (xNumber < yourNumber) {
    alert("down");
    counter++;
  } else {
    alert("Congratulations");
    const newH3 = document.querySelector("h3");
    const newImg = document.querySelector("#img1");
    const newP = document.querySelector("p");
    newH3.textContent = "Congratulations";
    newP.textContent = `You got it in ${counter}. times `;
    newImg.src = "https://media.tenor.com/5CIqu1hBfEMAAAAM/dance-emoji.gif";
  }
});
