const http = require('http')

const server = http.createServer((req, res)=> {
    const url = req.url
    const method = req.method

    console.log(url, method);
    
    if(url == "/") {
        res.write('<h1>This is home page</h1>')
        res.end()
    }
    
    if(url == "/page1") {
        res.write('<h1>This is page 1</h1>')    
        res.end()
    }

    if(url == "/page2") {
        res.write('<h1>This is page 2</h1>')    
        res.end()
    }

})

server.listen(3000)