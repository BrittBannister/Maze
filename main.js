const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let x
let y

const mazeEl = document.getElementById('maze')

const createMaze = function(blueprint) {
    for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
        const rowString = blueprint[rowNum]
        let blockDivs = ''
        for (let colNum = 0; colNum < rowString.length; colNum++) { //looking at the letters in rowString. 

            const blockType = rowString[colNum]
            switch (blockType) {
                case 'W':
                    blockDivs += '<div class = "block wall"></div>'
                    break;
                case 'S':
                    blockDivs += '<div class = "block start"></div>'
                    y = rowNum
                    x = colNum
                case 'F':
                    blockDivs += '<div class = "block finish"></div>'
                default:
                    blockDivs += '<div class = "block"></div>'
            }
        }
        mazeEl.innerHTML += '<div class = "row">' + blockDivs + '</div>'
    }
}
createMaze(map)