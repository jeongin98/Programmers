function sum(a,b){
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