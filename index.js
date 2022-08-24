const container = document.querySelector(".container");
const defaultSize = 16;

function makeBoard(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    // create the rows and columns with the css above
    for (let i = 0; i < (size * size); i++){
        const boxes = document.createElement("div");
        container.appendChild(boxes).className = "box";
    }

}

function clearBoard(){
    container.innerHTML = "";
}

function changeBoard(){
    const userButton = document.querySelector(".getUser");
    userButton.addEventListener("click", () => {
        let getSize = parseInt(prompt("Choose the size of the board: "));
        clearBoard();
        makeBoard(getSize);
    })
}


/*  // make color
function makeColor(){
    const color = document.getElementById("colorPicker").value;
    event.target.style.background = color;
}

//Target each box of the grid and change color
const div = Array.from(document.getElementsByClassName("box"));
div.forEach((box) => {
    box.addEventListener("mousedown", makeColor); //mousedown is the click
    box.addEventListener("mouseover", event => { //mouseover is to continue the action when stay click
        if (event.buttons == 1) makeColor(event);
    });
});  */

window.onload = () => {
    makeBoard(defaultSize)
    changeBoard()

}
