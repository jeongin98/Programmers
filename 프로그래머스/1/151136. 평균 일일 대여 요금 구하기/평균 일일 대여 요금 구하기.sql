-- 코드를 입력하세요
SELECT ROUND(AVG(DAILY_FEE),0) "AVERAGE_FEE"
FROM CAR_RENTAL_COMPANY_CAR
WHERE CAR_TYPE='SUV' 
# GROUP BY CAR_TYPE # WHERE 조건절에서 SUV 종만 묶어 계산했기 때문에 생략 가능