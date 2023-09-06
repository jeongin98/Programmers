function sumDigits(arr){
    const sum = arr.reduce((acc,cur) => acc+cur);
    return sum/arr.length;
}


function solution(arr) {
    return sumDigits(arr);
}