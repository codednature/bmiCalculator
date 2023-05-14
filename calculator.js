const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});


app.post("/bmicalculator", function(req, res){

    const Weight = parseFloat(req.body.weighted);
    const Height = parseFloat(req.body.height);

    const  bmi = Weight / (Height * Height);

    // res.send( "Your BMI is " +  bmi);
    res.send(
        ` <body style="background-color: lightcyan" >
        <h1 style="text-align: center">Your BMI is ${bmi}</h1>
        </body>
    `);

});


app.get("/", function(req, res){
        res.sendFile(__dirname + "/index.html");
    });
    
    app.post("/", function(req, res){
    
        const num1 = Number(req.body.num1);
        const num2 = Number(req.body.num2);
    
        const result = num1 + num2;
    
        res.send("The result of the calculation is " +  result)
    });
    


app.listen(3000, function() {
    console.log("Calculator app listening on port 3000")
});
