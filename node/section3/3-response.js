const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.write('<h1>Hello from Node.js</h1>')
    res.write('<h2>Hello from Node.js</h2>')
    res.write('<h3>Hello from Node.js</h3>')
    res.write('<h4>Hello from Node.js</h4>')
    res.write('<h5>Hello from Node.js</h5>')
    res.write('<h6>Hello from Node.js</h6>')
    res.end()
})

server.listen(4000)

// Port = Service
 
// Port 3000 = Service 1

// Port 4000 = Service 2
 
// localhost:3000
 
// localhost   =  127.0.0.1  = loopback address
 
// IP Address = 192.168.1.1, 203.200.192.10 represent devices
 
// IP Address is used to connect devices each others.
 
// TCP/IP is a protocol that transfer data on the internet.
 
    