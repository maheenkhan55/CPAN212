const http = require("http")
const app = http.createServer((re, res) => {
    if(req.url === "/") {
        res.end("hello from home")
    }

    else if (req.url === "/details") {
        res.end("hello from details")
    }

    else if (req.url === "/login"){
        req.end(``)
    }

    else if (req.url === "/homepage") {
        req.end(``)
    }

    else {
        res.end("Page not found")
    }
})
app.listen(3000)

// use http module to create a server
// have app.listen to make app start listening
// 3000 - is a port number to specify location 