
const p1 ={
    score : 0 ,
    button: document.querySelector('#btn1'),
    display: document.querySelector('#scoreDisplay1'),
}
const p2 ={
    score : 0 ,
    button: document.querySelector('#btn2'),
    display: document.querySelector('#scoreDisplay2'),
}
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 3;
let gameOver = false;

function updateScore(player,opposite){
    if (!gameOver){
        player.score +=1 ;
        if(player.score === winningScore){
            gameOver = true;
            player.display.classList.add('has-text-success')
            opposite.display.classList.add('has-text-danger')
            player.button.disabled=true;
            opposite.button.disabled=true;
        }
        player.display.innerText = player.score; 
    }
};

p1.button.addEventListener('click',function(){
    updateScore(p1,p2)

});

p2.button.addEventListener('click',function(){
    updateScore(p2,p1)

});

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value)
    p1.button.disabled=false;
    p2.button.disabled=false;
    reset()
})


resetBtn.addEventListener('click',reset)

function reset(){
    gameOver= false;
    for(let p of[p1,p2]){
        p.score = 0;
        p.button.disabled=false;
        p.display.innerText = p.score;
        p.display.classList.remove('has-text-success','has-text-danger')
    }
}