function solution(a, b, n) {
    
    var acc = 0;
    var cola_have = n;
    var cola_earn=0;
    
    while(cola_have >= a){
        cola_earn = Math.floor(cola_have / a) * b 
        cola_have = cola_earn + (cola_have % a)
        acc = acc + cola_earn
        // console.log(cola_earn);
    }
    return acc;
}

// 초기값 20병(n)
// 2개(a)를 가져다주면 콜라 1병(b)을 준다

// 초기 acc = 0
// 초기 cola_have = n
// while cola_have >= a 
// cola_earn = (cola_have / a) * b 
// cola_have = cola_earn + (cola_have % a)
// 누적값 acc = acc + cola_earn

// return acc