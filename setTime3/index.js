const ball = document.getElementById("myDiv");
const go = document.getElementById("finish");

let count = 5;

const counter = document.getElementById("counter");
counter.textContent = count;

// Compte a rebours de 5 sec
const interval = setInterval(() => {
    count -= 1;
    counter.textContent = count;

    
    if (count === 0) {
        ball.style.display="block";      // Affichage de ball
        clearInterval(interval);
        let count2 = 10;
        count2 -=1;
        console.log(count2);

        let intervalBall = setInterval(() => {
            let x = ball.offsetLeft + 5;
            let y = ball.offsetTop + 5;

            if (x >= 900){
                x = 0;
            }

            if (y >= 700){
                y = 0;
            }
            
            ball.style.position = "absolute";
            ball.style.left = x + "px";
            ball.style.top = y + "px";

            if (count2 == 0){
                clearInterval(intervalBall);
                clearInterval(clock10);
                go.style.display="flex";       // Compte a rebours du Game over
                ball
            }
        }, 50);

        // Compte a rebours de 10 sec
        let clock10 = setInterval(() => {
            count2 -=1;
            console.log(count2);
        }, 1000)
    }
}, 1000);
