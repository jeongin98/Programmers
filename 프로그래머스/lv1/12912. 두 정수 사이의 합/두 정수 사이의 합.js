function sum(a,b){
    // 반복문의 범위를, Math.min과 Math.max 이용하는 것도 좋다
    if(a == b)
        return a;
    
    if(a>b){
        let temp = a;
        a = b;
        b = temp;
    }
        
    
    let sum = 0;
    
    for(let i=a;i<=b;i++)
        sum+=i;
        
        
    return sum;
}


function solution(a, b) {
    return sum(a,b);
}