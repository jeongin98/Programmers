#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

                        

void NM(int* arr, int n, int m, int pos, int* num, int lastnum) {

    if (arr[m - 1] != 0) {
        for (int i = 0; i < m; i++)
            printf("%d ", arr[i]);
        printf("\n");
        return;
    }

    for (int i = 1; i <= n; i++) {
        if (num[i - 1] == 1 || lastnum > i)
            continue;
        else {
            arr[pos] = i;
            num[i - 1] = 1;
            lastnum = i;
            NM(arr, n, m, pos + 1, num, lastnum);
            arr[pos] = 0;
            num[i - 1] = 0;
        }
    }

}


int main(void) {
 
    int n, m;
    int arr[8] = { 0,0,0,0,0,0,0,0};
    int num[8] = { 0,0,0,0,0,0,0,0 };
    int lastnum;


    scanf("%d %d", &n, &m);

    NM(arr, n, m, 0, num, lastnum);

    return 0;
}