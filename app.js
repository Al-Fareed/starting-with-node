// const user = "Alfa";
// console.log(userName);
// const { log } = require('console');

// -------------------------------------------------
// const fs = require('fs'); //includes file system libraries
// fs.writeFile('user-data.txt','Name : '+user,(err)=>{   //WriteFile function writes into the file specified by creating that file
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Successfully written into file");
// });
// First argument is file name, 2nd arg text to be written and 3rd arg to handle exception if operation failed
// --------------------------------------------------------------
const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Incoming Request!");
console.log(req.method, req.url);

  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  if (req.method === "POST") {
    let body = '';
    req.on('end',()=>{
          const userName = body.split('=')[1];
          res.end('<h1>Got the POST request from '+userName +'</h1>');
    });

    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(
      '<form method = "POST"><input type = "text" name = "username"><button type = "submit">Create User</button> </form>'
    );
  }
});
server.listen(5000);
