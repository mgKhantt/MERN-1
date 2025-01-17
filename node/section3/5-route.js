const requestHandler = (req, res)=> {
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

}

module.exports = requestHandler

// Module System
// (1) default module system
// 	//export
// 	module.exports = requestHandler
// 	//reuse
// 	const requestHandler = require('./5-route')
// 	const server = http.createServer(requestHandler)
 
// (2) name module system
// 	//export
// 	exports.reqHand = requestHandler
// 	//reuse
// 	const { reqHand } = require('./5-route')
// 	const server = http.createServer(reqHand)
// has context menu