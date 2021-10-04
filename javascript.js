function check(){
let num1 = document.getElementById('num1').value ;

if((num1 % 2) == 0){
   document.getElementById('evenOrOdd').innerHTML= num1 + ' is even';
}
else {
    document.getElementById('evenOrOdd').innerHTML= num1 + ' is odd';
}
}