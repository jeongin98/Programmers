function devidedAll(arr, divisor){
    const newArr = arr.filter((x) => x%divisor == 0);
        return newArr.length?  newArr.sort((a, b) => a - b): [-1];
    }



function solution(arr, divisor) {
    var answer = devidedAll(arr, divisor);
    return answer;
}