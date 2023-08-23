function solution(my_string, overwrite_string, s) {

    
    // 인덱스 s부터 my_string 길이까지 잡아
    // 그 부분부터 replace
    // my_string에 result 갖다붙여
    var str1 = my_string.slice(0,s)+overwrite_string;
    var str2 = my_string.slice(str1.length,my_string.length+1)
    console.log(str1+str2);
   return str1+str2;
   
}