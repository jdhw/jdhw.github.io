console.log("JS loaded");
HTMLquestions = [
'1. What is HTML?',
'2. What is difference between id and class atrribute of the HTML tag',
'3. Which are HTML5 tags?',
'4. Which statements are true for block-level and inline elements',
'5. What tags are used to separate sections of texts',
'6. What is purpose of alterative texts in images',
'7. How to insert a picture as a background image on a web page',
'8. Which are NOT self closing tags',
'9. Which tag should be used to display elements in bulleted format',
'10. How to create a link that will connect to another web page when clicked'
];

HTMLanswers = [
    ['A. Hypertext Markup Language to display documents in the web browser.', 
    'B. HTML is use to display content which have tags.', 
    'C. It is kind of formatting language to display documents in MS-Word.', 
    'D. HTML is a programming language.'],
    ['2_1', '2_2', '2_3', '2_4'],
    ['3_1', '3_2', '3_3', '3_4'],
    ['4_1', '4_2', '4_3', '4_4'],
    ['5_1', '5_2', '5_3', '5_4'],
    ['6_1', '6_2', '6_3', '6_4'],
    ['7_1', '7_2', '7_3', '7_4'],
    ['8_1', '8_2', '8_3', '8_4'],
    ['9_1', '9_2', '9_3', '9_4'],
    ['10_1', '10_2', '10_3', '10_4'],
];

HTMLCorrectAnswers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];

userAnsers = [];

question = document.querySelector('#question');
choice1 = document.querySelector('#choice1');
choice2 = document.querySelector('#choice2');
choice3 = document.querySelector('#choice3');
choice4 = document.querySelector('#choice4');
answer = document.querySelector('#answer');
nextButton = document.querySelector('#nextButton');
choices = document.querySelectorAll(".choices");
category = document.querySelector("#category");
score = document.querySelector("#score");

startButton = document.querySelector("#startButton");
answer = document.querySelector("#answer");
//newGameButtonArea = document.querySelector(".newGameButtonArea");
//newGameButton = document.querySelector("#newGameButton");

questionCount = 0;
userChoice = 0;
userScore = 0;

//initially startGame and newGame area are hidden
document.querySelector(".startGame").style.display = 'none';
//newGameButtonArea.style.display = 'none';
document.querySelector(".alert").style.display = 'none';


//User starts the game by category of choice
startButton.addEventListener("click", startGame);



function startGame()
{
    questionCount = 0;
    userChoice = 0;
    userScore = 0;

    //startGame div is display
    document.querySelector(".startGame").style.display = 'block';
    document.querySelector(".selectCategory").style.display = "none";
    //newGameButtonArea.style.display = 'none';
    document.querySelector(".alert").style.display = 'none';

    displayQuestionAnswers(questionCount);
    userSelection();
    score.innerHTML = 'Score: ' + userScore;
   
    

}


function displayQuestionAnswers(questionNumber)
{
    question.innerHTML = HTMLquestions[questionNumber];
    choice1.innerHTML = HTMLanswers[questionNumber][0];
    choice2.innerHTML = HTMLanswers[questionNumber][1];
    choice3.innerHTML = HTMLanswers[questionNumber][2];
    choice4.innerHTML = HTMLanswers[questionNumber][3];

    nextButton.addEventListener("click", nextButtonClick);
    

}

function nextButtonClick()
{
    
    if(questionCount < 9) //play using next button
    {
        questionCount = questionCount + 1;   
        
        displayQuestionAnswers(questionCount);
    
        userSelection();
    
        score.innerHTML = 'Score: ' + userScore;

        answer.innerHTML = "";

    }
    else   //reached to the last question, declare results win / loss, display new game button to start over
    {
        if(userScore > 80)
        {
           //window.alert("You win Trivia game!");
           document.querySelector(".alert").style.display = 'block';
           document.querySelector(".alert").innerHTML = "Congratulations! You won Trivia game!!";
        }
        else
        {
            //window.alert("You did not win Trivia game!");
            document.querySelector(".alert").style.display = 'block';
            document.querySelector(".alert").innerHTML = "Sorry! You won did NOT win Trivia game!!";
            
        }
        questionCount = 0;
        userScore = 0;
        answer.innerHTML = "";
        //disable next button 
        nextButton.removeEventListener("click", nextButtonClick);

        //disable answers buttons
        for(let i=0; i<choices.length; i++)
        {
            choices[i].removeEventListener("click", select);
         }

        //create new game button
       /* newGameButton = document.createElement('button');
        t = document.createTextNode('New Game');
        newGameButton.appendChild(t);
        document.querySelector('#newGameButtonArea').appendChild(newGameButton);*/

        //new game button area is shown
        //newGameButtonArea.style.display = 'block';          
        //newGameButton.addEventListener("click", startGame);
        

        
    }
    
    
    
}

function userSelection()
{
    //console.log(choices.length);
    for(let i=0; i<choices.length; i++)
    {
        choices[i].addEventListener("click", select);
       
    }

}

function select(evt)
{
    evt.preventDefault();

    /*if(evt.srcElement.id != 'choice1' || evt.srcElement.id != 'choice2' || evt.srcElement.id != 'choice3' || evt.srcElement.id != 'choice4')
    {
        console.log("No answer selected!");
    }*/

    console.log("selected id " + evt.srcElement.id);
    switch (evt.srcElement.id)
    {
    case 'choice1': userChoice = 1;      
                    break;
    case 'choice2': userChoice = 2;      
                    break;
    case 'choice3': userChoice = 3;
                    break;
    case 'choice4': userChoice = 4;
                    break;
    default       : window.alert("Please select your answer.");
    }
    console.log("User Choice " + userChoice);

    correctAnswer();
}

function correctAnswer()
{
    if(HTMLCorrectAnswers[questionCount] == userChoice)
    {
        console.log("Correct Answer!");
        answer.innerHTML = "Your answer is correct!";
        userScore = userScore + 10;
    }
    else
    {
        answer.innerHTML = "Your answer is NOT correct. The correct answer is: " + HTMLCorrectAnswers[questionCount]
        console.log("Wrong Answer!");
    }
}