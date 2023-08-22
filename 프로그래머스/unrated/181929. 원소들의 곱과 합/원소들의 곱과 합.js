function solution(num_list) {
    return compare(num_list);
}


// 모든 원소들 곱 함수
const mul = (num_list) => {
    return num_list.reduce((acc,cur) => acc * cur);
               
}
// 합의 제곱 함수
const sum = (num_list) => {
    let result = num_list.reduce((acc,cur) => acc + cur);
    return result*result;
}

function compare(num_list){
    
    const mulRes = mul(num_list);
    const sumRes = sum(num_list);
    
    if(mulRes<sumRes) return 1;
    
    
    return 0;
}