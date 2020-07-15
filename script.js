import http from 'k6/http';
import { Counter } from "k6/metrics";
import { check, sleep } from 'k6';

const errorCounter = new Counter('errorCounter');

export let options = {
    
    vus: 250,
    max_vus: 2500,

    stages: [
        // { duration: '1m45s', target: 250 },
        // { duration: '1m30s', target: 300 },
        // { duration: '1m15s', target: 350 },
        { duration: '30m', target: 575 },
    ],
};

// ? Default GET request test function

// export default function() {
//     let res = http.get(`http://127.0.0.1:8008/getReviewsData`);
//     check(res, { 'status was 200': r => r.status == 200 , 
//                 'user-name is correct': r => r.json('user') == 'Johnathan'});
//     if(res.status === 500) {
//         errorCounter.add(1)
//     } 
//     sleep(1);
// }

// ? Default POST request test function
export default function() {

    let res = http.post(`http://127.0.0.1:8008/postReviewsData`);

    check(res, { 'status was 200': r => r.status == 200});

    if(res.status === 500) {

        errorCounter.add(1)
    }
    
    sleep(1);
}

// ? Random name test function, needs work

//     let res = http.get(``);
// export default function() {
//     let randIndex = Math.floor(Math.random() * 10000);
//     let user = randomArray[randIndex];
//     let res = http.get(`http://127.0.0.1:8008/getReviews?user=${encodeURIComponent(user)}`);
//     check(res, {
//         'status was 200': r => r.status == 200,
//         'return array exists': r => {
//             return Array.isArray(r.json())}
//         });
//     sleep(1);
// }
