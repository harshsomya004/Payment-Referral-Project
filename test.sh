## create user

curl -X POST -d '{"name": "shivang", "email":"oroz3x.github.com", "totalEarnings": 10, "isPaymentMade": false }' \
    -H 'Content-Type: application/json' \
    http://localhost:5000/create > data/shivang


curl -X POST -d '{"name": "harsh", "email":"harsh.github.com", "totalEarnings": 11, "isPaymentMade": false }' \
    -H 'Content-Type: application/json' \
    http://localhost:5000/create > data/harsh


curl -X POST -d '{"name": "somya", "email":"somya.github.com", "totalEarnings": 1, "isPaymentMade": false }' \
    -H 'Content-Type: application/json' \
    http://localhost:5000/create > data/somya



## shivang -> harsh -> somya

## /refer/{id{shivang}}/{id{harsh}}



