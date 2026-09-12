const gamebox = document.querySelector("#gamebox")



for (let i = 0; i < 4; i++) {
    const row = document.createElement("div")
    row.setAttribute("id", "row");
    for (let j = 0; j < 4; j++) {
        const box = document.createElement("div")
        box.setAttribute("id", "box");
        row.appendChild(box)
    }
    gamebox.appendChild(row)
}