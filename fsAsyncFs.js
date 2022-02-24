//file system
const {readFile,writeFile}= require('fs');
console.log('begin');

readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
      console.log(err);
      return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return
          }
          const second=result
          writeFile('./content/result-async.txt', `I love the results:${first},${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return
              }
             // console.log(result); 
             console.log('done');
          }
          )
    })
                          //console.log(result); //this is first text file
})
  console.log('start next');








