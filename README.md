MAZE DEVELOPMENT PLAN

1. DRAW THE MAZE
    1. Have the array of strings (W, S, F)
    2. Each row is a div and withing each row are divs for the cells.
        *instead of typing out each div for rows and columns, use a loop
            *loop for each row
            *loop for each column
        *use inner.HTML to display rows and columns in browser.
    3. Display it in browser-use CSS to display the empty divs.

2. HAVE PLAYER MOVE THROUGH MAZE, BLOCKED BY WALLS
    1. Need a start and finish position.
    2. Way to keep track of each position.
        *could use the row index and column index
        *startPos = {}
        *currentPos = {}
            map[y][x] ??[row][col]
            let curPos =
            let x pos =
            let y pos = 
        *finish = {}

    3. Way to access those^^ positions

    4. Way to actually move the player
        *Player will use arrow keys to move around.
            *when changing position, img of player will move by a certain amount
            *if on block __ and wanna go (direction) do something....append player/img used for player to div of new position
        *Need to set up Event Handlers to move the player div.

    5. Way to check if player can move or not, depending if there is a wall blocking them or no. Also cant move outside maze.
            *can player move?
            *whats above/under/left/right the current position? 
                Need to get row# and col#
                    above/// map[rowPos -1] 
                    below///map[rowPos +1]
                    right///map[colPos -1] 
                    left///map[colPos +1]

3. GAME IS WON WHEN PLAYER REACHES THE FINISH POSIITION. 
    1. Way to compare current position to winning position
        *Need to set a variable for the winning position x&y
        *have an if/else statement...
            *IF players current position === winning position 
    2. Let player know they have won the game WITHOUT using alert() or console.log


THINKING OUT LOUD STUFF:

1. How tf am I going to do all this?
2. Can I use an image that will move with players move?
3. To keep track of current position-should I do what I wrote above, or constanly update the map array to reflect
movement...find out if current position is relative to start purpose...movement will change the absolut position of the player...
4. Maybe give each cell/block an id....block00/block01/block02...etc..



