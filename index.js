var readLineSync=require('readline-sync');
var chalk= require('chalk') ;
const log = console.log;
var count=0;

log(chalk.bold('Welcome to Fan Quiz ....... ')+'\n');

log(chalk.bold.bgMagenta(' # Virat Army  # RCB ')  +'\n');

var userName = readLineSync.question('Let me have your name first !!    ' , {hideEchoBack:true});


log(chalk.bold('Welcome '+chalk.yellowBright.bold(userName))+'\n');

log(chalk.bold('Welcome to the quiz !! \n'+chalk.cyanBright.bold('Are you a Virat  Fan ?'))+'\n');

log("Let's start the quiz !!  You will score +1 for every right answer and -1 for every wrong answer" + '\n');

var questionOne ={
  question:'What is the NickName of virat? ',
  answer : 'chiku'
}

var questionTwo ={
  question:'Where was Virat born ? ',
  answer : 'Delhi'
}

var questionThree ={
  question:'When did Virat made his international debut (Year)? ',
  answer : '2008'
}

var questionFour ={
  question:"Virat's daughter name is ? ",
  answer : 'vamika'
}

var questionFive ={
  question:" What is the count of Virat's total centuries in international Cricket ? ",
  answer : '70'
}

var questionSix ={
  question:" What is Virat and Anshukha popularly called ? ",
  answer : 'Virushka'
}




var question =[questionOne,questionTwo,questionThree, questionFour,questionFive,questionSix];

function checkAnswer(i,Answer){
  if (question[i].answer.toUpperCase()===Answer.toUpperCase()){
    count+=1;
    log(chalk.green("Hurrah!! That's Right + 1 for that" + '\n'));
  }
  else{
    log(chalk.redBright("Oops!! That was wrong  - 1 for that"+'\n'));
  }
}


for (var i=0 ; i < question.length ; i++){
  var inputAnswer = readLineSync.question(chalk.bold(question[i].question));
  checkAnswer(i,inputAnswer);
}

if(count===6){
log(chalk.yellowBright('That was a perfect Run!! 6/6 \n' + chalk.underline('You are a true Virat Fan 👏 👏 👏')));
}
else if (count==0){
log("That's not good !! You Scored " + chalk.bold.bgBlack(count + "/6") + chalk.magentaBright(" We can't consider you as a true Virat Fan 😟 😟 😟"));
}
else{
  log("That's good !! You Scored " + count+ "/6");
}


