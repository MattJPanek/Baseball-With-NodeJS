/**
  * @Created by Matthew Panek
  * @Date 1/11/2020
  * This file will run the formulas on express
  */
  
 var formulas = require('../Baseball-With-NodeJS/Formula/PythagoreanExpectations.js');
 
 const express = require('express');
 const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


 
 const router = express.Router();
 const app = express();
 
 
 var winningPercentage = formulas.data.PythagoreanExpectationsCalcWP(897,697);
 
 var wins = formulas.data.PythagoreanExpectationsWin(897,697);
 
 var loss = formulas.data.PythagoreanExpectationsLoss(897,697);
 
 
 const data = [
 {"winningPercentage": winningPercentage, "wins": wins, "loss": loss}
 ];
 
 
 // adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/test', (req, res) => {
  res.send(data);
});
 
 

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
 
 
 
