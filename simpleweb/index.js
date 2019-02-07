const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    console.log('hey');
    res.send('Hi there');
});

app.listen(8080, () => {
    console.log('Listening to port 8080');
});