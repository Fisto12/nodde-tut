//file system
const {readFileSync,writeFileSync}= require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//console.log(first,second); // is first text file this is second text file

writeFileSync('./content/result-sync.txt', 'I love you', {flag:'a'}) //duplicates the text
console.log('done with the task');
console.log('starting with the task');


