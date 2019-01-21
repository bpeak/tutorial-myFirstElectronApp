console.log("i am renderer")

const { ipcRenderer } = require("electron")

document.getElementById("btn").addEventListener("click", () => {
    console.log("clicked")
    ipcRenderer.send("handleClick")
})

// window.handleClick = () => {
//     console.log("클릭햇니? ")
//     ipcRenderer.send("handle-click")
// }