
var $answerCnt = 1;

function answerCheck() {

    //get answer and user's answer
    var $answer = document.forms["answerForm"]["ansWord"].value;
    var $userAns = document.forms["answerForm"]["userAns"].value;

    //check for valid answer
    if ($userAns.length == 5 && $answerCnt < 5) {
        //clear warning
        document.getElementById("answerWarning").innerHTML = "";

        //make user answer uppercase
        $userAns = $userAns.toUpperCase();

        //split user word into characters
        var $userChars = $userAns.split("");

        //list user word letters gray
        document.getElementById("word" + $answerCnt + "letter1").innerHTML = $userChars[0];
        document.getElementById("word" + $answerCnt + "letter2").innerHTML = $userChars[1];
        document.getElementById("word" + $answerCnt + "letter3").innerHTML = $userChars[2];
        document.getElementById("word" + $answerCnt + "letter4").innerHTML = $userChars[3];
        document.getElementById("word" + $answerCnt + "letter5").innerHTML = $userChars[4];

        //check each user character against each answer character
        for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
                //check each letter of user answer against each of actual answer
                console.log($userAns.charAt(y) + ' = ' + $answer.charAt(x));

                if ($userAns.charAt(y) == $answer.charAt(x)) {
                    //check if letter is in same spot
                    if (y == x) {
                        console.log("SAME SPOT");
                        //color green
                        var $letter = parseInt(y) +1;
                        document.getElementById("word" + $answerCnt + "letter" + $letter).style.backgroundColor = "#84A59D";
                    }
                    else {
                        console.log("LETTER IN WORD");
                        //color yellow
                        var $letter = parseInt(y) +1;
                        document.getElementById("word" + $answerCnt + "letter" + $letter).style.backgroundColor = "#F9D79F";
                    }
                }
            }
        }

        $answerCnt++;
    }
    else if ($userAns.length != 5) {
        document.getElementById("answerWarning").innerHTML = "Word Must Be 5 Letters!";
    }
    else{
        document.getElementById("answerWarning").innerHTML = "You Lose!";
    }







}

function resetGame() {
    //clear warning and answer box
    document.getElementById("answerWarning").innerHTML = "";
    document.forms["answerForm"]["userAns"].value = "";

    $answerCnt = 0;
}