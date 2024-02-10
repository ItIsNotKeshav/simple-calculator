/*
const cbtn = document.getElementById('c');
const entbtn = document.getElementById('ent-btn');
const delbtn = document.getElementById('del');
cbtn.addEventListener("mouseover", (event) => {
    const x = event.pageX - cbtn.offsetLeft;
    const y = event.pageY - cbtn.offsetTop;
  
    cbtn.style.setProperty("--xPos", x + "px");
    cbtn.style.setProperty("--yPos", y + "px");
  });

entbtn.addEventListener("mouseover", (event) => {
    const x = event.pageX - entbtn.offsetLeft;
    const y = event.pageY - entbtn.offsetTop;
  
    entbtn.style.setProperty("--xPos", x + "px");
    entbtn.style.setProperty("--yPos", y + "px");
  });

delbtn.addEventListener("mouseover", (event) => {
    const x = event.pageX - delbtn.offsetLeft;
    const y = event.pageY - delbtn.offsetTop;
  
    delbtn.style.setProperty("--xPos", x + "px");
    delbtn.style.setProperty("--yPos", y + "px");
  });
*/

const buttons = document.querySelectorAll('.btn, .ent-btn');

buttons.forEach((button) => {
    button.addEventListener("mouseover", (event) => {
        const x = event.pageX - button.offsetLeft;
        const y = event.pageY - button.offsetTop;

        button.style.setProperty("--xPos", x + "px");
        button.style.setProperty("--yPos", y + "px");
    });
});