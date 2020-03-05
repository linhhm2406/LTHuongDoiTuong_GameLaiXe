ROCK_DEFAULT_HEIGHT = 60;
ROCK_DEFAULT_WIDTH = 80;

let Rock = function (img,top, left) {
    this.top = top;
    this.left = left;
    this.img = img;
    this.speed = 20;

    this.setTop = function (number) {
        this.top = number;
    };

    this.rockMoveDown = function () {
        this.top += this.speed;
    };
    this.getRock = function () {
        return '<img src="'+this.img+'" height="60" width="80" style="top: '+this.top+ 'px; left : '+this.left+ 'px; position: absolute"/>'
    };

};
    let rock1 = new Rock('img/rock1.jpg', 10, 30);

    function drawRock1() {
        document.getElementById('rock1').innerHTML = rock1.getRock();
    }

    function rock1MoveDown() {
        if (rock1.top < 800 - 60) {
            rock1.rockMoveDown();

        } else if (rock1.top + 60 > 800 - 60) {
            rock1.setTop(10);
        }

        drawRock1();
        setTimeout(rock1MoveDown, 100)
    }

    rock1MoveDown();

    let rock2 = new Rock('img/rock2.jpeg', 10, 150);

    function drawRock2() {
        document.getElementById('rock2').innerHTML = rock2.getRock();
    }

    function rock2MoveDown() {
        if (rock2.top < 800 - 60) {
            rock2.rockMoveDown();

        } else if (rock2.top + 60 > 800 - 60) {
            rock2.setTop(10);
        }
        drawRock2();
        setTimeout(rock2MoveDown, 100)
    }

    setTimeout(rock2MoveDown, 1900);
