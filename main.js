function MadLib() {
    console.log('button');
}
var nounoneInput = document.getElementById('noun-1');
var nountwoInput = document.getElementById('noun-2');
var numberInput = document.getElementById('number');
var verbInput = document.getElementById('verb');

var nounone = nounoneInput.value;
var nountwo = nountwoInput.value;
var number = numberInput.value;
var verb = verbInput.value;

var greeting = `When bootcamp is over, I'm going to have fun doing at ${nounone}. What do you think I should have for a ${nountwo}? How many ${number} do you think will ${verb}?`;
    console.log(greeting);