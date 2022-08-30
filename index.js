const container = document.querySelector(".container");

const colorBtn = document.getElementById("color");
const eraseBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");
const resetBtn = document.getElementById("reset");
const slide = document.querySelector("#sizeSlider")

const div = Array.from(document.querySelectorAll(".container"));

const defaultSize = 16;

function makeBoard(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    // create the rows and columns with the css above
    for (let i = 0; i < (size * size); i++){
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        container.appendChild(boxes);
    }

}

function resetBoard(){
    container.innerHTML = "";
};

function clearBoard(){
    const box = container.querySelectorAll("div");
    box.forEach((item) => {
        item.style.backgroundColor = "transparent";
    })
}

function changeBoard(){
    const box = container.querySelectorAll("div")
    box.forEach(pixel => pixel.remove());
    makeBoard(slide.value)
    colorBtn.classList.add("selectColor");
    eraseBtn.classList.remove("selectColor");
    chooseColor()
}

// make color
function makeColor(){
    const color = document.getElementById("colorPicker").value;
    event.target.style.background = color;
}

function eraser(){
    event.target.style.background = "transparent";
}

//Target each box of the grid and change color
function chooseColor(){
    const grid = container.querySelectorAll(".box")
    grid.forEach((box) => {
        box.addEventListener("mousedown", makeColor); //mousedown is the click
        box.addEventListener("mouseover", event => { //mouseover is to continue the action when stay click
            if (event.buttons == 1) makeColor(event);
        });
    });   
} 

function makeErase(){
    const grid = container.querySelectorAll(".box")
    grid.forEach((box) => {
        box.addEventListener("mousedown", eraser); //mousedown is the click
        box.addEventListener("mouseover", event => { //mouseover is to continue the action when stay click
            if (event.buttons == 1) eraser(event);
        });
    });   
}

 colorBtn.addEventListener("click", () => {
    colorBtn.classList.add("selectColor");
    eraseBtn.classList.remove("selectColor");
    chooseColor();
})
 
 eraseBtn.addEventListener("click", () => {
    eraseBtn.classList.add("selectColor");
    colorBtn.classList.remove("selectColor");
    makeErase();
})

/* //Erase divs one by one
eraseBtn.onclick = makeErase;
//Activate button by clicking
colorBtn.onclick = chooseColor; */
//Reset everything by reloading the page
resetBtn.addEventListener("click", () => location.reload());
// Clear the board
clearBtn.addEventListener("click", clearBoard);
// Set the size of board
slide.addEventListener("mouseup", changeBoard)

window.onload = () => {
    makeBoard(defaultSize);
    chooseColor();
}