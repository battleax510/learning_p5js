const CANVAS_HEIGHT = 620,
    CANVAS_WIDTH = 560,
    CANVAS_REAL_HEIGHT = CANVAS_HEIGHT + 30;
cellWidth = CANVAS_WIDTH / 28,
    cellHeight = CANVAS_HEIGHT / 31; //cellWidth && cellHeight = 20
let ghosts = [],
    spawn, count;

let SheetWidth = 384,
    SheetHeight = 240,
    cols = 16,
    rows = 10,
    imgWidth = Math.floor(SheetWidth / cols),
    imgHeight = Math.floor(SheetHeight / rows);

function preload() {
    sheetImage = loadImage('PacManSheet.png');
    player = new User();
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_REAL_HEIGHT);
    pacman = new Pacman(14 * cellWidth, 23.5 * cellHeight);
    ghosts.push(new Ghost(0, 6, 12.5 * cellWidth, 14.5 * cellHeight));
    ghosts.push(new Ghost(0, 8, 13.5 * cellWidth, 14.5 * cellHeight));
    ghosts.push(new Ghost(8, 8, 14.5 * cellWidth, 14.5 * cellHeight));
    ghosts.push(new Ghost(0, 9, 15.5 * cellWidth, 14.5 * cellHeight));
    terrain = new Terrain();
    spawn = true;
    count = 0;
}

function draw() {
    background(0);
    terrain.show();
    player.statusBar();
    count++;
    fill(255);
    rect(13 * cellWidth, 12 * cellHeight, cellWidth * 2, cellHeight);
    noFill();
    if (pacman.death)
        pacman.die();
    else if (terrain.nFood == 0) {
        noLoop();
        textAlign(CENTER);
        textSize(60);
        textStyle(BOLD);
        fill(255, 211, 0);
        text('YOU HAVE WON!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    } else {

        if (spawn) {
            if (count > 100 && count < 150) {
                ghosts[0].setPos(9 * cellWidth + cellWidth / 2, 11 * cellHeight + cellHeight / 2);
            } else if (count > 200 && count < 250) {
                ghosts[1].setPos(18 * cellWidth + cellWidth / 2, 17 * cellHeight + cellHeight / 2);
            } else if (count > 300 && count < 350) {
                ghosts[2].setPos(18 * cellWidth + cellWidth / 2, 11 * cellHeight + cellHeight / 2);
            } else if (count > 400 && count < 450) {
                ghosts[3].setPos(9 * cellWidth + cellWidth / 2, 17 * cellHeight + cellHeight / 2);
                spawn = false;
            }
        }
        pacman.show();
        pacman.move();
        for (let ghost of ghosts) {
            ghost.move();
            ghost.show();
            if (pacman.hits(ghost)) {
                pacman.flag = 0;
                pacman.death = true;
                pacman.die();
            }
        }
        for (var i = terrain.terrain.length - 1; i >= 0; i--) {
            for (var j = terrain.terrain[i].length - 1; j >= 0; j--) {
                let element = terrain.terrain[i][j];
                if (pacman.hits(element) && element.food) {
                    terrain.terrain[i][j] = new Cell(false, false, element.x, element.y);
                    terrain.nFood--;
                    player.addScore(10);
                }
            }
        }
    }

}

function keyPressed() {
    if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') {
        pacman.addInstruction(1, 0);
    } else if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') {
        pacman.addInstruction(-1, 0);
    } else if (keyCode === UP_ARROW || key === 'w' || key === 'W') {
        pacman.addInstruction(0, -1);
    } else if (keyCode === DOWN_ARROW || key === 's' || key === 'S') {
        pacman.addInstruction(0, 1);
    } else if (keyCode === ENTER && pacman.death && player.lives >= 0) {
        setup();
        loop();
    }
}