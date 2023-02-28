"use strict";
function lowerStr(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function countWords(str){
    let str_split = str.split(' ');
    let count = 0;
    let mark = [',', '.'];
    for(let word of str_split){
        if(!mark.includes(word)){
            count += 1;
        }
    }
    return count;
}

function rightSpace(str){
    let newStr = '';
    let mark = [',', '.'];
    for(let i = 0; i < str.length; i++){
        if( (str[i] === ' ' && str[i-1] === ' ') || (str[i] === ' ' && mark.includes(str[i+1]))) {
            continue;
        }
        newStr += str[i];
        if(mark.includes(str[i]) && str[i+1] !== ' ') {
            newStr += ' ';
        }
    }
    return newStr;
}
function uniqWords(str){
    let str1 = str.replace(/[/.,!?;]*/g, '').toLowerCase()
    let words = str1.split(' ')
    let result = {};
    words.forEach(function (x) {
        if(result[x] !== undefined){
            result[x] += 1;
        } else {
            result[x] = 1;
        }
    });
    let entries = Object.entries(result);
    let sorted = entries.sort((a,b) => b[1]-a[1])
    let strRes = ''
    for(let elem of sorted){
        strRes += `${elem[0]} - ${elem[1]} раз(а), `
    }
    return strRes
}