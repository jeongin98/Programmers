function solution(n) {
    return count(n);
}

function count(n){
    
    let sum = 0;
    let cnt = 0;
    let j;
    
    for(let i=1;i<=n;i++){
         let j = i;
        sum = 0;
        while(sum<n){
            sum+=j;
            j++;
        }
        if(sum == n) 
            cnt++;
        
    }
    
    return cnt;
   
}



// i부터 연속한 수를 더하다가 15이상이 되면 판단 시작
// sum이 15가 되면 cnt, 
// sum이 15 넘어가는 순간 pass
