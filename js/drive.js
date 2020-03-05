CAR_DEFAULT_LEFT = 150;
CAR_DEFAULT_TOP = 650;
CAR_DEFAULT_WIDTH = 60;
CAR_DEFAULT_HEIGHT = 120;

let Car = function (image) {
    this.image = image;
    this.left = CAR_DEFAULT_LEFT;
    this.top = CAR_DEFAULT_TOP;

    this.getCar = function () {
        return '<img id="main_car" ' +
            'src="' + this.image + '"' +
            'height="120px"' +
            'width="60px"' +
            'style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    };
    this.carMoveLeft = function () {
        if (this.left > 55) {
            this.left -= 100;
        }
    };
    this.carMoveRight = function () {
        if (this.left < 150) {
            this.left += 100;
        }
    }
};

function start() {
    let mainCar = new Car('img/car.png');

    function draw() {
        document.getElementById('main').innerHTML = mainCar.getCar();

    }

    draw();

    window.addEventListener("keydown", move);

    function move(evt) {
        switch (evt.keyCode) {
            case 37 :
                mainCar.carMoveLeft();
                draw();
                break;
            case 39 :
                mainCar.carMoveRight();
                draw();
                break;
        }
    }


    let Rock = function (img, top, left) {
        this.top = top;
        this.left = left;
        this.img = img;
        this.speed = 20;
        this.moveDownSpeed = 100;

        this.setTop = function (number) {
            this.top = number;
        };

        this.rockMoveDown = function () {
            this.top += this.speed;
        };
        this.getRock = function () {
            return '<img src="' + this.img + '" height="60" width="80" style="top: ' + this.top + 'px; left : ' + this.left + 'px; position: absolute"/>'
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
        setTimeout(rock1MoveDown, rock1.moveDownSpeed)
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
        setTimeout(rock2MoveDown, rock2.moveDownSpeed)
    }

    setTimeout(rock2MoveDown, 1900);

    function checkGameOver() {
        if (mainCar.left === 50 && mainCar.top < rock1.top+60
            || mainCar.left === 150 && mainCar.top < rock2.top+60) {
            alert('Game Over');
        }
        setTimeout(checkGameOver, 0.001)
    }
    checkGameOver();
    let count = 0;

    function checkPoint() {
        if (mainCar.top === rock1.top || mainCar.top === rock2.top) {
            count++;
            document.getElementById('point').value = count;
        }
        setTimeout(checkPoint, 100);
    }

    checkPoint();

    let level = 1;

    function checkWin() {
        if (count === level * 10) {
            level++;
            document.getElementById('level').value = level;
            rock1.moveDownSpeed -=30;
            rock2.moveDownSpeed -=30;
            console.log(rock1.moveDownSpeed);
        }
        checkGameOver();
        setTimeout(checkWin, 500)
    }
    checkWin()
}