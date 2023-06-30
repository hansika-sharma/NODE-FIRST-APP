const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res, next) =>{
//     console.log("Second middleware");
//     res.send("<p>Assignment 2 solution</p>");
// });

app.use('/user', (req, res, next) => {
    console.log("/middleware user");
    res.send("<p>assignment /user</p>");
});

app.use('/', (req, res, next) =>{
    console.log("/middleware");
    res.send("<p>assignment</p>");
});

app.listen(3000);