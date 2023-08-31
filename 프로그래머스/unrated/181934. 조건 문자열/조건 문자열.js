/*
    # 요구사항
    두 수 n과 m의 대소관계가, 주어진 ineq, eq와 동일하다면 1 을 아니면 0을 return
    
    # 함수 구현
    eq 먼저 확인 
        - eq가 "="라면 ineq와 함께 비교
        - eq가 "!"라면 ineq로만 비교

*/

function compare(ineq, eq, n, m){
    
    let flag;
    
    if(eq == "!"){
        if(ineq == ">")
            n>m? flag = 1 : flag = 0;
         else if(ineq == "<")
             n<m? flag = 1 : flag = 0;
    }
    else if(eq == "="){
        if(ineq == ">")
            n>=m? flag = 1 : flag = 0;
         else if(ineq == "<")
             n<=m? flag = 1 : flag = 0;
    }
    return flag;
    
}




function solution(ineq, eq, n, m) {
   return compare(ineq, eq, n, m);
}




