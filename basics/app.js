"use strict";
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return result;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result: ';
add(number1, number2, printResult, resultPhrase);
