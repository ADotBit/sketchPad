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

const div = Array.from(document.getElementsByClassName("box"));
div.forEach((box) => {
    box.addEventListener("mouseenter", () => console.log("Mouse Enter"));
    box.addEventListener("mouseleave", () => console.log("Mouse leave"));
})
