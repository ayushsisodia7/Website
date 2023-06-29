const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server  = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if(req.url=='/me')
    {
    res.statusCode = 200;
    res.end('<h1> This is Ayush Sisodia</h1> <p> Hey this is the way to rock the world!</p>');
    }
    else if(req.url=='/')
    {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html')
    res.end(data.toString());
    }
    else if(req.url=='/about')
    {
    res.statusCode = 200;
    res.end('<h1> This is About my Life</h1> <p>I am 21 Years old, and love coding </p>')
    }
    else
    {
        //res.ayush();
        res.statusCode = 404;
        res.end('<h1> Error 404</h1> <p>Page not found </p>')
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});
