const http =require('http')
const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('welcome to the home page')
    }
    if (req.url==='/about'){
        res.end('welcome to the about page')
    }
    
        res.end(`
        <h1>Oops we cant find the page</h1>
        <a href='/'>Go back to home page</a>
        `)
    

})
server.listen(5000)