                                                                 MAZE DEVELOPMENT PLAN
                                                        https://brittneybannister.gitlab.io/maze

I got help from Chris W. with rewriting my maze design. I had it in a switch statement at first-which worked 
just fine, but when I tried to get my player to start on the starting position I wasn't able to do so. 
He talked me through converting it to an if/else if/else statement instead. 

1. DRAW THE MAZE
    1. Have the array of strings (W, S, F)
    2. Each row is a div and withing each row are divs for the cells.
        *instead of typing out each div for rows and columns, use a loop
            *loop for each row
            *loop for each column
        *append each row/column/cell to browser.
    3. Display it in browser-use CSS to display the empty divs.
        *add class names to rows/cols/cells in if/else statements so i can style them later

2. HAVE PLAYER MOVE THROUGH MAZE, BLOCKED BY WALLS
    1. Need a start and finish position.
    2. Way to keep track of each position.
        *could use the row index and column index
        *startPos = {}
        *currentPos = {}
            map[y][x] ??[row][col]
        ---OR---
        since I'm moving 'player', declare playerTop/Left/ and playerRow/Col
            ....start one of those at 9 and 0 for my starting position...

    3. Way to access those^^ positions
        *if/else statments

    4. Way to actually move the player (keycodes or just key names?)
        *Player will use arrow keys to move around.
            *when changing position, img of player will move by a certain amount
            *if on block __ and wanna go (direction) do something....append player/img used for player to div of new position
          ---OR---
            *Could I just add +1/-1 from the starting position and then player row and col will be modified with each move...

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
        have a winning function I could put in my move around function...
        *have an if statement...
            *IF players current position === winning position  OR....if player is on 'F'...don't know how I want to write it yet...
    2. Let player know they have won the game WITHOUT using alert() or console.log
        *let winning alert = create element...create a new div and use innerHTML to display message  player has won...Or maybe create a div with some text in it and somehow style it or animate it to appear when player is in winning position...


THINKING OUT LOUD STUFF:

1. How tf am I going to do all this?
2. Can I use an image that will move with players move?
3. To keep track of current position-should I do what I wrote above, or constanly update the map array to reflect
movement...find out if current position is relative to start position...movement will change the absolute position of the player...



