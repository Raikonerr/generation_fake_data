const express  = require('express');
const  app      = express(); 
const bodyParser=require("body-parser");
const ejs = require('ejs');
const faker = require('faker');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//middleware to handle static files 

app.use(express.static('public'));

app.get('/', (req, res)=> {
    const data = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        city: faker.address.city(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber(),
    };
    res.render('index', {data});
});
app.listen(port,()=> {
    console.log('Server listening on port ${port}');
})