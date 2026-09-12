const gamebox = document.querySelector("#gamebox")

let color = "black";

document.getElementById("resBtn").addEventListener("click", () => {
    gamebox.replaceChildren();
    res = parseInt(prompt("Select Resolution")) 
    for (let i = 0; i < res; i++) {
        const row = document.createElement("div")
        row.classList.add("row"); 
        for (let j = 0; j < res; j++) {
            const box = document.createElement("div")
            box.classList.add("box"); 
            let bgOpacity = 0

            const paint = (e) => {
                e.preventDefault();

                if (e.type === 'mousedown' || e.buttons === 1) {
                    box.style.backgroundColor = color; 
                    bgOpacity = (bgOpacity + 0.1);
                    box.style.opacity = (bgOpacity);
                }
            };

            box.addEventListener("mousedown", paint);
            box.addEventListener("mouseover", paint);

            row.appendChild(box)
        }
        gamebox.appendChild(row)
    }
} )

document.getElementById("clearBtn").addEventListener("click", () => {
    gamebox.replaceChildren();
})

document.getElementById("blackBtn").addEventListener("click", () => {
    color = "black"
})

document.getElementById("redBtn").addEventListener("click", () => {
    color = "red"
})

document.getElementById("blueBtn").addEventListener("click", () => {
    color = "blue"
})

document.getElementById("greenBtn").addEventListener("click", () => {
    color = "green"
})

