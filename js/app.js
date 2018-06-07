// Enemies our player must avoid
// Variables applied to each of our instances go here,
// we've provided one for you to get started
// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images


class Enemy {
  constructor(x, y, speed, sprite) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  update(dt) {
    this.x += this.speed * dt;

  // If bug is off canvas, 'rewind' and add random speed
    if (this.x > 505) {
        this.x = -200;
        this.speed = 50 + Math.floor(Math.random() * 350);
    }
  // Collision with player >> resets player to initial position
    if (player.x < this.x + 60 && player.x + 35 > this.x
      && player.y < this.y + 25 && 30 + player.y > this.y) {
        player.x = 200;
        player.y = 400;
    }

  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Player class
class Player {
  constructor(x, y,sprite ) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
  }

  update(){
    // Prevents player from going off canvas
    if (this.y > 400) {
        this.y = 400;
    }

    if (this.x > 450) {
        this.x = 450;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // If player reached water (top of canvas), restart position
    if (this.y < 0) {
        this.x = 200;
        this.y = 400;
    }
  }


  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key){
    switch(key) {
      case 'up':
        this.y -= 50;
        break;
      case 'down':
        this.y += 50;
        break;
      case 'left':
        this.x -= 50;
        break;
      case 'right':
        this.x += 50;
        break;
    }

  }
}
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
var enemy1 = new Enemy(10,100, 90);
var enemy2 = new Enemy(55,60, 50);
var enemy3 = new Enemy(50,250, 120);
var enemy4 = new Enemy(100, 20, 300)

allEnemies.push(enemy1, enemy2, enemy3);
let player = new Player(200,400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
