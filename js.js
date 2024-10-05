let display=document.getElementById('display');

function pass(input){
    display.value+=input;
}
function calculate(){
    display.value=eval(display.value);
}
function cleardisplay(){
    display.value="";

}
function calculate(){

    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Syntax Error😔! "
    }
}