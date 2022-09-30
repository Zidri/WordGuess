var $answerCnt = 1;

function answerCheck() {



    //get answer and user's answer
    var $answer = document.forms["answerForm"]["ansWord"].value;
    var $userAns = document.forms["answerForm"]["userAns"].value;

    //for debugging
    // console.log($answer);

    //check for valid answer
    if ($userAns.length == 5 && $answerCnt < 6) {
        //clear answer box
        document.forms["answerForm"]["userAns"].value = "";

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

        //check if all letters are correct
        if ($userAns == $answer) {

            for (var y = 1; y < 6; y++) {
                //color green
                document.getElementById("word" + $answerCnt + "letter" + y).style.backgroundColor = "#52A376";
            }

            //announce win
            document.getElementById("answerWarning").innerHTML = "You Win!";

            //hide answer form
            document.forms["answerForm"].style.display = "none";

            //show play again button
            document.forms["againForm"].style.display = "block";

        }
        else {
            //check each user character against each answer character
            for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                    //check each letter of user answer against each of actual answer

                    if ($userAns.charAt(y) == $answer.charAt(x)) {
                        //check if letter is in same spot
                        if (y == x) {
                            //color green
                            var $letter = parseInt(y) + 1;
                            document.getElementById("word" + $answerCnt + "letter" + $letter).style.backgroundColor = "#52A376";
                        }
                        else {
                            //color yellow
                            var $letter = parseInt(y) + 1;
                            document.getElementById("word" + $answerCnt + "letter" + $letter).style.backgroundColor = "#F2DC5D";
                        }

                    }
                }
            }
        }

        $answerCnt++;

        if ($answerCnt == 6) {
            //show answer word
            document.getElementById("answerWord").style.display = "flex";

            //announce loss
            document.getElementById("answerWarning").innerHTML = "You Lose!";

            //hide answer form
            document.forms["answerForm"].style.display = "none";

            //show play again button
            document.forms["againForm"].style.display = "block";
        }
        
    }
    else if ($userAns.length != 5) {
        document.getElementById("answerWarning").innerHTML = "Word Must Be 5 Letters!";
    }
    else {
        //show answer word
        document.getElementById("answerWord").style.display = "flex";

        //announce loss
        document.getElementById("answerWarning").innerHTML = "You Lose!";

        //hide answer form
        document.forms["answerForm"].style.display = "none";

        //show play again button
        document.forms["againForm"].style.display = "block";
    }

}

function resetGame() {
    //clear warning and answer box
    document.getElementById("answerWarning").innerHTML = "";
    document.forms["answerForm"]["userAns"].value = "";

    $answerCnt = 0;
}