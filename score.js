var scoreList = document.querySelector("#scorelist");

var user = JSON.parse(localStorage.getItem('user'));

if (scoreList !== null) {
    function update() {
        scoreList.style.display = "block";

        scoreList.textContent = "your score is " + user.score;
    }
    
}

update();