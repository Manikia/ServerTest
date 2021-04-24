//Node Express

const express = require("express")
//require is import syntax
//const initializes name

const app = express()
//calls function inside app



// app.get("/", (request, response) => {
//   response.send('hi')
// })

// app.listen(1234, console.log('Server is on'))

app.get("/greeting", (request, response) =>{
    //app.get gets input and shows an output
    //request isnt used

    response.send('test response from page request')
})

// app.get("/profile/:name", (request, responce) => {
//   const username = request.params.name
//   responce.send('Welcome ' + username)
// })

app.get("/hue/:colors", (request, response) =>{
    //colon is input from user
    const color = request.params.colors
    //initialize the color to be the one user inputted
    response.send("Color chosen " + color)
    //outputs the users input w greeting
})

app.listen(1234, console.log("Server test on"))
//app.listen stands by for users request
//(port number, output if works)

//test output: http://localhost:1234/greeting