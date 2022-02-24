//local dependency
//npm i <packageName>

//global dependency
//npm install -g <packageName>

//use npm init to install package.json 
//use npm init -y to skip questions

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
