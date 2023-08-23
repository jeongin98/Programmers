const arrToString = (arr => {
    return arr.reduce((acc,cur) => acc+cur);
});


function solution(arr) {
    
    return arrToString(arr);
}