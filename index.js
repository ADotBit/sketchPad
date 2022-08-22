const container = document.querySelector(".container");

//create the rows
for (let i = 0; i < 16; i++){
    const content = document.createElement("div");
    content.classList.add("box");
    content.setAttribute("style", "border: solid black 2px;");
    container.append(content);
    //create columns
    for(let j = 0; j < 16; j++){
        const content = document.createElement("div");
        content.classList.add("box");
        content.setAttribute("style", "border: solid black 2px;");
        container.append(content)
    }
}

// make color
function makeColor(){
    event.target.style.background = "blue";
}


//Target each box of the grid
const div = Array.from(document.getElementsByClassName("box"));
div.forEach((box) => {
    box.addEventListener("mousedown", makeColor); //mousedown is the click
    box.addEventListener("mouseover", event => { //mouseover is to continue the action when stay click
        if (event.buttons == 1) makeColor(event);
    })
})
