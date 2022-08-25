const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const clearBtn = document.querySelector(".clear");
const div = Array.from(document.querySelectorAll("div"));

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
    const box = document.querySelectorAll(".box");
    box.forEach((item) => {
        item.style.backgroundColor = "transparent";
    })
}
clearBtn.addEventListener("click", clearBoard);
 

function changeBoard(){
    const userButton = document.querySelector(".getUser");
    userButton.addEventListener("click", () => {
        let getSize = parseInt(prompt("Choose the size of the board: "));
        resetBoard();
        makeBoard(getSize);
    })
}


// make color
function makeColor(){
    const color = document.getElementById("colorPicker").value;
    event.target.style.background = color;
}

//Target each box of the grid and change color
div.forEach((box) => {
    box.addEventListener("mousedown", makeColor); //mousedown is the click
    box.addEventListener("mouseover", event => { //mouseover is to continue the action when stay click
        if (event.buttons == 1) makeColor(event);
    });
});   

//Reset everything by reloading the page
resetBtn.addEventListener("click", () => location.reload());

window.onload = () => {
    makeBoard(defaultSize);
    changeBoard();
}
