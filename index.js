const http = require('http');
const axios = require('axios').default;
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');



var app = express();
var port = 8000;


app.use(bodyParser.json())


app.get('/hello/:foo/:bar',(req,res) => {

    res.json({message: "Hello World", data:[req.params.foo, req.params.bar]});

});





app.listen(port,function(err){
    console.log('Listening to port ' + port);
})

/*

http.createServer((req, res)=>{
    res.write(users.join("\n")); //display the list of users on the page
    res.write(people.join("\n"));
    res.write(planets.join("\n"));
    res.end();                   //end the response
}).listen(8000);                 // listen for requests on port 8000

*/


let users = [];                  
(async function getNames(){
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user=>user.name);
        emails = data.map(email => email.email)
        console.log(users)
        console.log(emails)
    } catch(error){
        console.log(error)
    }
})()




// Trying with the Starwars API

let people = [];
(async function getPeople(){
    try{
        const {data} = await axios.get("http://swapi.dev/api/people/");
        people = data.results.map(person=>person.name);
        console.log(people)
    } catch(error){
        console.log(error)
    }
})()




let planets = [];
(async function getPlanets(){
    try{
        const {data} = await axios.get("http://swapi.dev/api/planets/");
        planets = data.results.map(planet=>planet.name);
        console.log(planets)
    } catch(error){
        console.log(error)
    }
})()



