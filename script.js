import http from 'k6/http';
import { Counter } from "k6/metrics";
import { check, sleep } from 'k6';

const errorCounter = new Counter('errorCounter');

export let options = {
    
    // vus: 1500,
    // max_vus: 2500,

    stages: [
        { duration: '45m', target: 1750 },
        { duration: '30m', target: 2000 },
        { duration: '15m', target: 2200 },
        { duration: '30m', target: 2300 },

    ],
};

export default function() {

    let res = http.get(`http://127.0.0.1:8008/getReviews`);

    check(res, { 'status was 200': r => r.status == 200 , 
                'user-name is correct': r => r.json('user') == 'Johnathan'});

    if(res.status === 500) {

        errorCounter.add(1)
    }
    
    sleep(1);
}



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
