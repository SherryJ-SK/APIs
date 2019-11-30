var scoreList = document.querySelector("#scorelist");


var user = JSON.parse(localStorage.getItem('user'));


if (scoreList !== null) {
    function update() {
        scoreList.style.display = "block";

        var score = user.score;
        var name = user.name;

        var li = document.createElement("li");

        li.innerHTML = name + "'s score is " + score;

        scoreList.append(li);
      
    }
    
}

update();