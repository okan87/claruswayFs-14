//! ************SELECTORS*************
const firstBtn = document.getElementById("first-btn");
const SecondBtn = document.getElementById("second-btn");
const containerDiv = document.getElementById("container");

//! ************VARIABLE**************
const PINK = "#E91E63";
const RED = "#F44336";
const PURPLE = "#9C27B0";
const BLUE = "#2196F3";
const GREEN = "#4CAF50";
const YELLOW = "#FFEB3B";

//! ************EVENTS****************
//* First Buton events
firstBtn.addEventListener("click", () => {
  changeBackground();
});

//* Second Buton events
SecondBtn.addEventListener("mouseover", ()=>{
    changeBackground();
})

//! ************FUNCTIONS*************

const changeBackground = (e) => {
    const colorArr = [PINK,RED,PURPLE,BLUE,GREEN,YELLOW]
    const randomColor = colorArr[Math.floor(Math.random()*6)]
  containerDiv.style.backgroundColor =randomColor
};
