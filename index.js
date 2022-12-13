// const spaceship = document.getElementById('spaceship')

// ship.style.display = "block"


function show()
{
	if (document.getElementById)
	document.getElementById("fire").style.visibility = "visible";
}
// blink "off" state
function hide()
{
	if (document.getElementById)
	document.getElementById("fire").style.visibility = "hidden";
}


function moveUp(){
    const downNumbers = spaceship.style.bottom.replace("px","")
    const yPosition = parseInt (downNumbers, 10)
        spaceship.style.bottom = `${yPosition+100}px`
        spaceship.style.rotate = `0deg`
        show()
        setTimeout(hide, 200)

}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowUp") {
    moveUp();
    }
})

function moveDown(){
    const downNumbers = spaceship.style.bottom.replace("px","")
    const yPosition = parseInt (downNumbers, 10)
        spaceship.style.bottom = `${yPosition-100}px`
        spaceship.style.rotate = `180deg`
        show()
        setTimeout(hide, 200)
        
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowDown") {
        moveDown()
    }
}
)

function moveLeft(){
    const leftNumbers = spaceship.style.left.replace("px","")
    const xPosition = parseInt (leftNumbers, 10)
        spaceship.style.left = `${xPosition-100}px`
        spaceship.style.rotate = `270deg`
        show()
        setTimeout(hide, 200)
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft") {
        moveLeft()
    }
}
)

function moveRight(){
    const leftNumbers = spaceship.style.left.replace("px","")
    const xPosition = parseInt (leftNumbers, 10)
        spaceship.style.left = `${xPosition+100}px`
        spaceship.style.rotate = `90deg`
        show()
        setTimeout(hide, 200)
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight") {
        moveRight()
    }
}
)





// Stars 

function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }
  
  const body = document.querySelector('body');
  const canvasSize = body.offsetWidth * body.offsetHeight;
  const starsFraction = canvasSize / 6000;
  
  for(let i = 0; i < starsFraction; i++) {
    // Set up random elements
    let xPos = random(0, 100);
    let yPos = random(0, 100);
    let alpha = random(0.5, 1);
    let size = random(1, 2);
    let colour = '#ffffff';
      
    // Add them to the body
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = xPos + '%';
    star.style.top = yPos + '%';
    star.style.opacity = alpha;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = colour;
    star.style.zIndex = "1"
    document.body.appendChild(star);
  }