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

let playerPosition = {}

const container = document.querySelector('#maze')

function mazeDisplay() {
    for (let i = 0; i < map.length; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        for (let j = 0; j < map[i].length; j++) {
            let cell = document.createElement('div')
            if (map[i][j] === 'W') {
                container.appendChild(row)
                cell.classList.add('wall')
                row.appendChild(cell)
            } else if (map[i][j] === " ") {
                container.appendChild(row)
                cell.classList.add('block')
                row.appendChild(cell)
            } else if (map[i][j] === 'S') {
                container.appendChild(row)
                cell.classList.add('start')
                row.appendChild(cell)
                cell.id = 'start'
            } else {
                container.appendChild(row)
                cell.classList.add('finish')
                row.appendChild(cell)
            }
        }
    }
}
mazeDisplay()
let player = document.createElement('div')
player.classList.add('player')
document.getElementById('start').appendChild(player)
let playerTop = 0
let playerLeft = 0
let playerColumn = 0
let playerRow = 9 //it's nine because my start position is (9,0)
document.addEventListener("keydown", moveAround)

function moveAround(evt) {
    if (evt.code === 'ArrowUp') {
        if (map[playerRow - 1][playerColumn] !== 'W') {
            playerTop -= 20
            player.style.top = playerTop + 'px'
            playerRow -= 1
        }
    } else if (evt.code === 'ArrowDown') {
        if (map[playerRow + 1][playerColumn] !== 'W') {
            playerTop += 20
            player.style.top = playerTop + 'px'
            playerRow += 1
        }
    } else if (evt.code === 'ArrowRight') {
        if (map[playerRow][playerColumn + 1] !== 'W') {
            playerLeft += 20
            player.style.left = playerLeft + 'px'
            playerColumn += 1
        }
    } else if (evt.code === 'ArrowLeft') {
        if (playerRow <= 9 && playerColumn <= 0) {
            return
        } else if (map[playerRow][playerColumn - 1] !== 'W') {
            playerLeft -= 20
            player.style.left = playerLeft + 'px'
            playerColumn -= 1
        }

        winner();
    }

    function winner() {
        if (map[playerRow][playerColumn] == "F") {
            document.removeEventListener("keydown", moveAround);
            let winMsg = document.createElement('div')
            winMsg.classList.add('win')
            document.body.appendChild(winMsg)
            winMsg.innerHTML = 'YOU MADE IT!!!!'
        }
    }
}