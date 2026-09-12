const gamebox = document.querySelector("#gamebox")
let res = 4;

document.getElementById("resBtn").addEventListener("click", () => {
    gamebox.replaceChildren();
    res = parseInt(prompt("Select Resolution")) 
    for (let i = 0; i < res; i++) {
        const row = document.createElement("div")
        row.classList.add("row"); 
        for (let j = 0; j < res; j++) {
            const box = document.createElement("div")
            box.classList.add("box"); 
            box.addEventListener("click", () => {
                box.style.backgroundColor = "red"; 
            });
            row.appendChild(box)
        }
        gamebox.appendChild(row)
    }
} )