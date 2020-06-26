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
                    break;
                case 'F':
                    blockDivs += '<div class = "block finish"></div>'
                    break;
                default:
                    blockDivs += '<div class = "block"></div>'
            }
        }
        mazeEl.innerHTML += '<div class = "row">' + blockDivs + '</div>'
    }
}
createMaze(map)

document.addEventListener('keydown', logKey);



let playerTop = 200;
let playerLeft = 200;


function logKey(evt) {
    console.log(evt);
    if (evt.keyCode === 38) {
        // up arrow
        document.getElementById('player').style.top = (playerTop - 10) + 'px';
        playerTop -= 10 //changing the actual var. value 
    } else
    if (evt.keyCode === 40) {
        // down arrow
        document.getElementById('player').style.top = (playerTop + 10) + 'px';
        playerTop += 10
    } else if (evt.keyCode === 37) {
        // left arrow
        document.getElementById('player').style.left = (playerLeft - 20) + 'px';
        playerLeft -= 20
    } else if (evt.keyCode === 39) {
        // right arrow
        document.getElementById('player').style.left = (playerLeft + 20) + 'px';
        playerLeft += 20
    }
}