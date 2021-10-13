import { name} from './utils';
import {age} from './libs';

console.log('Ran from app.js');
console.log(name);
console.log(age);

const obj = {
    "a": 'Alpha',
    "b": 'Beta'
}

const newObj = {
    ... obj ,
    "c": 'Cheetah'
}

console.log(newObj);

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();