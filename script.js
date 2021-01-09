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
    ['1_1', '1_2', '1_3', '1_4'],
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

questionCount = 0;

displayQuestionAnswers(questionCount);

nextButton.addEventListener("click", nextButtonClick);


function displayQuestionAnswers(questionNumber)
{
    question.innerHTML = HTMLquestions[questionNumber];
    choice1.innerHTML = HTMLanswers[questionNumber][0];
    choice2.innerHTML = HTMLanswers[questionNumber][1];
    choice3.innerHTML = HTMLanswers[questionNumber][2];
    choice4.innerHTML = HTMLanswers[questionNumber][3];

}

function nextButtonClick()
{
    if(questionCount < 9)
    {
        questionCount = questionCount + 1;   
        
    }
    else
    {
        questionCount = 0;
    }
    
    displayQuestionAnswers(questionCount);
    console.log("Question: " + questionCount);

    userSelection();
}

function userSelection()
{
    //console.log(choices.length);
    for(let i=0; i<choices.length; i++)
    {
        choices[i].addEventListener("click", select(this.id))
    }

}

function select(evt)
{
    evt.preventDefault();
    console.log("selected id " + this.id);
    /*if (this.choice1)
    {
        console.log("Choice1");
        return 1;
    }else if (this.choice2)
    {
        console.log("Choice2");
        return 2;
    }else if(this.choice3)
    {
        console.log("Choice3");
        return 3;
    }
    else{
        console.log("Choice4");
        return 4;
    }*/
}