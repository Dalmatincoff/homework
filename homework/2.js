"use strict"

function res_add(num1, num2, result, carry) {

    let left = parseInt(num1.pop() || '0', 10);
    let right = parseInt(num2.pop() || '0', 10);

    let l = left + right + (carry || 0);

    return res_add(num1, num2, l % 10 + (result || ""), Math.floor(l/10));
}

function add(num1, num2) {
    return res_add(num1.toString().split(""), num2.toString().split(""), "","").toString();
}

function mult(num1, num2){
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    let result = Array(num1.length+num2.length).fill(0);
    for(let i = 0; i < num1.length; i++){
        let carry = 0;
        for(let j = 0; j < num2.length || carry; j++) {
                let cur = result[i + j] + num1[i] * ( j <= (num2.length-1) ? num2[j] : 0) + carry;
                result[i + j] = parseInt(cur %  10, 10);
                carry = cur / 10;
        }
    }
   result = result.filter(function (x){return !(x !==x);})
    return result.reverse().join('');
}

function sub(max, min) {
    max = max.split('').reverse();
    min = min.split('').reverse();
    let carry = 0;
    for ( let i =0; i<min.length || carry; i++){
        max[i] -= carry + (i <= (min.length-1) ? Number(min[i]) : 0);
        carry = max[i] < 0;
        if (carry){
            max[i] += 10;
        }
    }
    return max.reverse().join('').replace(/[0]/g, '');
}

function div(max, min){
    let carry = 0;
    max = max.split('').reverse();
    for ( let i =max.length-1; i>=0; --i){
        let cur = Number(max[i]) + carry * 10;
        max[i] = parseInt(cur / Number(min), 10);
        carry = parseInt(cur % Number(min), 10);
    }
    return  max.reverse().join('').replace(/[0]/g, '');
}