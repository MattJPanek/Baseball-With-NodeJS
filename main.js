/**
  * @Created by Matthew Panek
  * @Date 7/30/2018
  * This file will run the formulas
  */
  
 var formulas = require('../Baseball-With-NodeJS/Formula/PythagoreanExpectations.js');
 
 var winningPercentage = formulas.data.PythagoreanExpectationsCalcWP(897,697);
 
 var wins = formulas.data.PythagoreanExpectationsWin(897,697);
 
 var loss = formulas.data.PythagoreanExpectationsLoss(897,697);
 
 console.log("Winning Percentage: " + winningPercentage);
 
 console.log("Number of Wins: " + wins);
 
 console.log("Number of Losses: " + loss);