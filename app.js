// const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();  //app -> object

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public'))); 

app.use('/admin', adminRoutes);
app.use(shopRoutes);
// app.use((req, res, next) => {   //use -> allow to use middleware function, next -> function that is pass by app.use() funtion by express.js
//   console.log("In the middleware");
//   next(); //allow the request to continue to the next middleware in line
// }); 

//const server = http.createServer(app);
// server.listen(3000);

app.use((req, res, next) => {
  res.status('404').sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);




