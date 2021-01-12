console.log("JS loaded");
HTMLquestions = [
'1. What is HTML?',
'2. What is difference between id and class atrribute of the HTML tag?',
'3. Which tag is introduced with HTML5?',
'4. Which statement is false for block-level and inline elements?',
'5. Which tag is NOT used to separate sections of texts?',
'6. What is purpose of alterative texts (alt attribute) in image tag?',
'7. How to insert a picture as a background image on a web page?',
'8. Which is NOT a self closing tag?',
'9. Which tag should be used to display elements in bulleted format?',
'10. How to add a line on a web page?'
];

HTMLanswers = [
    ['A. Hypertext Markup Language to display documents in the web browser.', 
    'B. HTML is use to display content which have tags.', 
    'C. It is kind of formatting language to display documents in MS-Word in the browser.', 
    'D. HTML is a programming language.'],
    ['A. Id and class attributes cannot be applied to the same tag element.',
     'B. Id is unique and can apply to one element, while class can apply to multiple elements.',
     'C. Id and class attributes are unique.', 
     'D. Id and class attributes are same.'],
    ['A. title', 'B. body', 'C. article', 'D. script'],
    ['A. The block-level elements are always start on a new line.', 
    'B. Block elements takes whole width available.', 
    'C. Inline elements does not start on new line',
    'D. Inline elements takes up whole width as available'],
    ['A. INPUT tag', 'B. DIV tag', 'C. BLOCKQUOTE', 'D. P tag'],
    ['A. Alternative text provides alternative image if not found.',
    'B. Alternative text provides alternative text for the image, if image cannot be displayed',
    'C. Alternative text is not useful information for users.',
    'D. Alt attribute should not be used in image tag.'],
    ['A. Use img tag in html', 
    'B. Use imgage tag in html',
     'C. Use body tag and background-image attribute',
     'D. The body tag cannot be used to provide background image on a web page'],
    ['A. link', 'B. img', 'D. br', 'C. div'],
    ['A. ul', 'B. ol', 'C. dl', 'D. li'],
    ['A. br tag', 
    'B. hr tag ',
    'C. p tag', 
    'D. line tag '],
];

HTMLCorrectAnswers = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B'];

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
userChoice = "";
userScore = 0;


//disable CSS and JavaScript buttons
document.querySelector("#category2").disabled = true;
document.querySelector("#category3").disabled = true;

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
            document.querySelector(".alert").innerHTML = "Sorry! You did NOT win Trivia game!!";
            
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
    case 'choice1': userChoice = 'A';      
                    break;
    case 'choice2': userChoice = 'B';      
                    break;
    case 'choice3': userChoice = 'C';
                    break;
    case 'choice4': userChoice = 'D';
                    break;
    default       : answer.innerHTML = "Please select your answer.";
    }
    console.log("User Choice " + userChoice);

    if (userChoice === 'A' || userChoice === 'B' || userChoice === 'C' || userChoice === 'D')
    {
    correctAnswer();
    }
    else
    {
        answer.innerHTML = "Please select your answer.";
    }
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