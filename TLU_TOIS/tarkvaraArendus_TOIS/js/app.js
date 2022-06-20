let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()

app.use(cookieParser);
  
app.get('/', (req, res)=>{
res.send('welcome to express app');
});

let loginData = 'test@test.ee';

app.get('/setuser', (req, res)=>{
    res.cookie("email", loginData);
    res.send('user data added to cookie');
});

app.get('/getuser', (req, res)=>{
    res.send(req.cookies);
});

app.listen(3002, (err)=>{
    if(err)
    throw err;
    console.log('listening on port 3000');
});