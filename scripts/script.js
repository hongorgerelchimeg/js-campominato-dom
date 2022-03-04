const bombArea = document.querySelector('.campo');
const inPut = document.querySelector('#level');
const btnPlay = document.querySelector('#play');
const container = document.querySelector('.container')
const finishWindow = document.querySelector('.finish');




btnPlay.addEventListener('click', play)

function play() {
    // GAME RESET //
    container.classList.remove("medium", "hard");
    bombArea.innerHTML = "";
    finishWindow.classList.remove('display-box');
    let finished = false;
    let score = 0;
    const totalBomb = 16;
   
    //Arrays 
    const bombs = [];
    const boxNums = [];
    
    let level = inPut.value;
    let min = 1;
    let max;

    if (level == "easy") {
         max = 100;
    } else if (level == "medium") {
        container.classList.add("medium");
        max = 81;
    } else {
        container.classList.add("hard");
        container.classList.add("hard");
        max = 49;
        
    }
    
    console.log(finished);
    generateRandomBomb(max);
    generateBoxNum(max);
    bombSpreader();
    console.log(boxNums);
   
    for(let i = min; i <= max; i++){
        
        if (boxNums[i] == 'BOMB') {
            divBomb();

        } else {
            divBox();
        }
       
    }

    









    function generateRandomBomb(max) {
        while (bombs.length < totalBomb)  {
            let = randomBombNum = randomNum(0, max);
            
            if (!bombs.includes(randomBombNum)) {
                bombs.push(randomBombNum);
                
            }
        }
    }

    function generateBoxNum(max) {
        let boxNum = 0;
        while (boxNums.length < max) {
            boxNums.push(boxNum);
           
            boxNum++;
        }
    }


    function bombSpreader() {
        i = 0
        while (i < totalBomb) {
        let changeBomb = parseInt(bombs[i]);
        boxNums[changeBomb] = "BOMB" 
        i++;
        }
    }
    
    
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    
    function clickedBox () {
        this.classList.add("selected", "show");
        score++;
        if (score >= max - totalBomb) {
            const boxCell = document.querySelectorAll('.box');
            for (i=0; i < boxCell.length; i++) {
                boxCell[i].removeEventListener("click", clickedBomb);
                boxCell[i].removeEventListener("click", clickedBox);
            }
            finishWindow.classList.add('display-box');
            finishWindow.innerHTML = `<div class="discription neon-red">
                                        <div class="text-effect"> You Win! Your Score: ${score} </span> <br><br> selezionauna <span>Difficoltà</span>  per <span> inziare</span> nuova partita.</div></div>`;
        }
       
    }
    
    function clickedBomb () {
        
        this.classList.add("selected-bomb", "bomb");
        finished = true;
        
        if (finished == true) {
            finishWindow.classList.add('display-box');
            finishWindow.innerHTML = `<div class="discription neon-red">
                                        <div class="text-effect">
                                            <span> <span> GAME OVER! Your Score: ${score} </span> <br><br> seleziona una Difficoltà</span>  per <span> inziare</span> nuova partita.
                                        </div>
                                    </div>`
            const boxCell = document.querySelectorAll('.box');
            for (i=0; i < boxCell.length; i++) {
                boxCell[i].removeEventListener("click", clickedBomb);
                boxCell[i].removeEventListener("click", clickedBox);
                if (boxCell[i].innerHTML == "") {
                boxCell[i].classList.add("selected-bomb");
                } else {
                
               } 
            
            }
            
        } 
    }
    
    function divBox() {
        let box = document.createElement("div");
        let randomNumMax3 = randomNum(0, 4);

        // GAME LOGIC
        // +1, -1 ,-6 -7 -8, 6 ,7 ,8 
        boxNums

        box.innerHTML = randomNumMax3;
        box.classList.add("box", "hidden");
        box.addEventListener("click", clickedBox);
        bombArea.append(box);
    }
    
    function divBomb() {
        
        
        let box = document.createElement("div");
        box.classList.add("box", "hidden");
        box.addEventListener("click", clickedBomb);
        bombArea.append(box);
        
    }

  
    
}    




