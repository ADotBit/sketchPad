const container = document.querySelector(".container");

function makeBoard(rows, cols){
    //make a root property to adapt the grid
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    //create the rows
    for (let i = 0; i < rows; i++){
        //create columns
        for(let j = 0; j < cols; j++){
            const columns = document.createElement("div");
            columns.classList.add("box");
            container.append(columns);
        }
        const row = document.createElement("div");
        row.classList.add("box");
        container.append(row);
    }
}

let getSize = parseInt(prompt("Choose the size of the board: "));
makeBoard(getSize, getSize);




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
    });
});
