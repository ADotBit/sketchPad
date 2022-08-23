const container = document.querySelector(".container");


function makeBoard(row, cols){
    //make a root property to adapt the grid
    container.style.setProperty('--grid-cols', cols);
    //create the rows
    for (let i = 0; i < row; i++){
        const rows = document.createElement("div");
        rows.classList.add("box");
        container.append(rows);
    //create columns
    for(let j = 0; j < cols; j++){
        const columns = document.createElement("div");
        columns.classList.add("box");
        container.append(columns)
        }
    }
}
makeBoard(20, 20);

// make color
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
    })
})
