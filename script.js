import http from 'k6/http';
import { Counter } from "k6/metrics";
import { check, sleep } from 'k6';

var errorCounter = new Counter("my_error_counter");

export let options = {
    
    // vus: 1500,
    // max_vus: 2500,

    stages: [
        // { duration: '30s', target: 1750 },
        // { duration: '30s', target: 2000 },
        // { duration: '2m', target: 2200 },
        // { duration: '2m', target: 2300 },
        { duration: '10s', target: 100 }, // below normal load
        // { duration: '1m', target: 100 },
        // { duration: '10s', target: 1400 }, // spike to 1400 users
        // { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
        // { duration: '10s', target: 100 }, // scale down. Recovery stage.
        // { duration: '3m', target: 100 },
        // { duration: '10s', target: 0 },
    ],
};

export default function() {

    // let randIndex = Math.floor(Math.random() * 10000);
    // let userName = data[randIndex].user;

    // let res = http.get(`http://127.0.0.1:8008/getReviews?user=${encodeURIComponent(user)}`);
    let res = http.get(`http://127.0.0.1:8008/getReviews`);

    check(res, { 'status was 200': r => r.status == 200 , 
                'user-name is correct': r => r.json('user') == userName});

    if(res.status === 500) {

        errorCounter.add(1)
    }
    
    sleep(1);
}


// export default function() {

//     let res = http.get(`http://localhost:5200/reviews`);
//     check(res, {
//       'status was 200': r => r.status == 200,
//       'return array exists': r => {
//         return Array.isArray(r.json())}
//       });
//     sleep(1);
// }