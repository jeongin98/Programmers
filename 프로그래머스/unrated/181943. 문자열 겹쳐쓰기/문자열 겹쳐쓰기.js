function solution(my_string, overwrite_string, s) {
    // 인덱스 s부터 my_string 길이까지 잡아
    // 그 부분부터 slice
    // my_string에 result 갖다붙여
   return my_string.slice(0,s)+overwrite_string+my_string.slice(s+overwrite_string.length);
   
}