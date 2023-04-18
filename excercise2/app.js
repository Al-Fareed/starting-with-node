// starting with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*app.use((req, res, next) => {
  let body = "";
  req.on("end", () => {
    const uName = body.split("=")[1];
    if (uName) {
      req.body = { name: uName };
    }
    next(); //used to forward request  to next middleware
  });
  req.on("data", (chunk) => {
    body += chunk;
  });
});*/

// we can write the above code in short as
// TODO: forget the above code, lets focus on this

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user',(req, res, next) => {
  res.send('<h1>User:' + req.body.uName + '</h1>'); //uName must be same as the name specified for the input
});

app.get('/', (req, res, next) => {
  res.send(
    '<form method="POST" action = "/user"><input type ="text" name="uName" placeholder="Name"><button type = "submit" >Submit</button></input></form>'
  );
});

app.listen(5000);
