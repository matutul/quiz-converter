function startquiz(){
    var x = document.getElementsByClassName("questionbox");
    var y = document.getElementsByClassName("start");
    index = 0;
    correct = 0;
    renderquestion();
    x[0].style.display = "block";
    y[0].style.display = "none";
    ok.setAttribute("onClick","nextq()");        
    ok.innerHTML= "Next &#10095;";
        
};



var questions = [
    ['What is the name of national flower of Bangladesh?','Rose','Water-lily','Tulip','B'],
    ['What is the name of national poet of Bangladesh?','Tagor','Ahsan','Nazrul','C'],
    ['What is the name of national Bird of Bangladesh?','Duel','Crow','Magpie','A'],
    ['What is the name of national flower of Bangladesh?','Guevara','Mango','Jackfruit','C']
];

const qstatus = document.getElementById("questionstatus");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const ok = document.getElementById("ok");

var index = 0;
var choice, correct=0, percentage;

renderquestion();
function renderquestion(){
    if(index>=questions.length){
        qstatus.innerText = 'Question Completed.!';
        question.innerText = 'You got ' + correct + ' of ' + questions.length + ' answer correct.';
        percentage = (correct/questions.length)*100;
        answer.innerHTML = 'Your ' + percentage + '% answer is correct..!';
        finish();
        ok.setAttribute("onClick","done()");        
        ok.innerHTML= "OK";
        return false;
    }
    qstatus.innerText ='Question ' + (index+1) + ' / ' +questions.length;
    question.innerText =(index+1) + '. ' + questions[index][0];
    answer.innerHTML = '<p><input type="radio" name="choices" value="A"> ' + questions[index][1] + '</input></p>';
    answer.innerHTML += '<p><input type="radio" name="choices" value="B"> ' + questions[index][2] + '</input>';
    answer.innerHTML += '<p><input type="radio" name="choices" value="C"> ' + questions[index][3] + '</input>';

}



function nextq(){
    choices = document.getElementsByName('choices');
    for(var i=0;i<choices.length;i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[index][4]){
        correct++;
    }
    index++;
    renderquestion();
}



function finish(){
    if(percentage >= 90){
        swal({
            title: "Great !",
            text: "You have passed in this quiz..!",
            icon: "success",
        });
    }
    else if(percentage >= 60){
        swal({
            title: "Awesome !",
            text: "You have passed with average mark.",
            icon: "info",
        });
    }
    else{
        swal({ 
            title: "Oops!", 
            text: "Sorry Buddy! You are failed..!!", 
            icon: "warning", 
            }); 
    }
}



function done() {
    var x = document.getElementsByClassName("questionbox");
    var y = document.getElementsByClassName("start");
    x[0].style.display = "none";
    y[0].style.display = "flex";
}
// window.addEventListener("load", renderquestion, false);
