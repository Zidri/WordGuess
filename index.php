<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/046dd30d2f.js" crossorigin="anonymous"></script>
    <title>Guess the Word</title>
    <script src="script.js"></script>
    <?php 
    require("connect.php"); 
    
    if(isset($_POST['gameStart']) && $_POST['gameStart'] == "1"){
        //get random word id
        $randID = rand(1,999);
        // echo($randID);

        //get word for game
        $sql_getword = 'SELECT
                        word
                    FROM
                        5letterwords
                    WHERE
                        wordID = "'.$randID.'"';


        
        $r = $pdo->query($sql_getword);
        $word = $r->fetch();
    
        $word = strtoupper($word[0]);

        $wordChrs = str_split($word);
        
    echo('
</head>

<body>    

    <div class="header">
        <h1>Guess the Word</h1><br>
    </div>
    <div class="container">

        <div class="generator">            

            <div class="tries">
            <div class="tryword">
                <div class="letter" id="word1letter1"></div>
                <div class="letter" id="word1letter2"></div>
                <div class="letter" id="word1letter3"></div>
                <div class="letter"id="word1letter4"></div>
                <div class="letter" id="word1letter5"></div>
            </div>
            <div class="tryword">
                <div class="letter" id="word2letter1"></div>
                <div class="letter" id="word2letter2"></div>
                <div class="letter" id="word2letter3"></div>
                <div class="letter" id="word2letter4"></div>
                <div class="letter" id="word2letter5"></div>
            </div>
            <div class="tryword">
                <div class="letter" id="word3letter1"></div>
                <div class="letter" id="word3letter2"></div>
                <div class="letter" id="word3letter3"></div>
                <div class="letter" id="word3letter4"></div>
                <div class="letter" id="word3letter5"></div>
            </div>
            <div class="tryword">
                <div class="letter" id="word4letter1"></div>
                <div class="letter" id="word4letter2"></div>
                <div class="letter" id="word4letter3"></div>
                <div class="letter" id="word4letter4"></div>
                <div class="letter" id="word4letter5"></div>
            </div>
            <div class="tryword">
                <div class="letter" id="word5letter1"></div>
                <div class="letter" id="word5letter2"></div>
                <div class="letter" id="word5letter3"></div>
                <div class="letter" id="word5letter4"></div>
                <div class="letter" id="word5letter5"></div>
            </div>            
        </div>

       </div>

        



        <div class="answerDisplay">
            <div id="answerWord">
                <div class="letter" id="answerletter1">'.$wordChrs[0].'</div>
                <div class="letter" id="answerletter2">'.$wordChrs[1].'</div>
                <div class="letter" id="answerletter3">'.$wordChrs[2].'</div>
                <div class="letter" id="answerletter4">'.$wordChrs[3].'</div>
                <div class="letter" id="answerletter5">'.$wordChrs[4].'</div>
            </div>

            <div class="answerWarning" id="answerWarning"></div>
            <form class="answerForm" name="answerForm" method="post">
                <input type="text" id="userAns" name="userAns">
                <button type="button" class="btn" id="answerBtn" onclick="answerCheck()">Answer</button>
                <input type="hidden" name="ansWord" value="'.$word.'">
            </form>

            <form class = "againForm" name="againForm" method="post" action="index.php">                    
                <input type="submit" class="btn" id="startBtn" value="Play Again">
                <input type="hidden" name="gameStart" value="1">
            </form>

        </div>


        <!-- <div class="listDisplay">
            <h2>All Numbers</h2>
            <div class="list" id="list"></div>
        </div> -->
    </div>
</body>');
}

else{
    echo('</head>

    <body>
        <script src="script.js"></script>
    
        <div class="header">
            <h1>Guess the Word</h1><br>
        </div>
        <div class="container">
    
            <div class="generator">
                <form name="startForm" method="post" action="index.php">
                    <div class="btnCenter">
                        <input type="submit" class="btn" id="startBtn" value="Start">
                        <input type="hidden" name="gameStart" value="1">
                </form>
    
            </div>
    
            <div class="tries">
                <div id="word5">
                    <div id="word5letter1"></div>
                    <div id="word5letter2"></div>
                    <div id="word5letter3"></div>
                    <div id="word5letter4"></div>
                    <div id="word5letter5"></div>
                </div>
                <div id="word4">
                    <div id="word4letter1"></div>
                    <div id="word4letter2"></div>
                    <div id="word4letter3"></div>
                    <div id="word4letter4"></div>
                    <div id="word4letter5"></div>
                </div>
                <div id="word3">
                    <div id="word3letter1"></div>
                    <div id="word3letter2"></div>
                    <div id="word3letter3"></div>
                    <div id="word3letter4"></div>
                    <div id="word3letter5"></div>
                </div>
                <div id="word2">
                    <div id="word2letter1"></div>
                    <div id="word2letter2"></div>
                    <div id="word2letter3"></div>
                    <div id="word2letter4"></div>
                    <div id="word2letter5"></div>
                </div>
                <div id="word1">
                    <div id="word1letter1"></div>
                    <div id="word1letter2"></div>
                    <div id="word1letter3"></div>
                    <div id="word1letter4"></div>
                    <div id="word1letter5"></div>
                </div>
            </div>

        </div>
    </body>');
}

?>

</html>