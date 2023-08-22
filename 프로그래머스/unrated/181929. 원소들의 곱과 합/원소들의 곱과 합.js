function solution(num_list) {
    return compare(num_list);
}


// 모든 원소들 곱 함수
const mul = (num_list) => {
    return num_list.reduce((acc,cur) => acc * cur);      
}
// 합 함수
const sum = (num_list) => {
    return num_list.reduce((acc,cur) => acc + cur);;
}

function compare(num_list){
    
    const mulRes = mul(num_list);
    const sumRes = sum(num_list);
    
    // 거듭제곱(**2)
    return mulRes < sumRes**2 ? 1:0;
}