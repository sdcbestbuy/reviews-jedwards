import http from 'k6/http';
import { check, sleep } from 'k6';

var myErrorCounter = new Counter("my_error_counter");

export let options = {
  stages: [
    { duration: '30s', target: 300 },
    { duration: '1m30s', target: 4000 },
    { duration: '20s', target: 3500 },
  ],
};

export default function() {
  let res = http.get('http://127.0.0.1:8008/getReviews');

  check(res, { 'status was 200': r => r.status == 200 });

  if(res.status === 500) {

    myErrorCounter.add(1)
  }
  sleep(1);
}