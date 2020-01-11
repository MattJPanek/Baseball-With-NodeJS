/**
  * @Created by Matthew Panek
  * @Date 7/30/2018
  * This file holds the calculations for the Pythorean Expectations
  */
  
  
	/**
		This calculates the PythagoreanExpectations based on the Baseball-Reference formula
	
	  */
    
	var PythagoreanExpectationsCalcWP = function (x,y){
		
		
		var formula = Math.pow(x,1.83)/(Math.pow(x,1.83) + Math.pow(y,1.83));
		
		
		return formula;
		
	}
	
	/**
		This calculates the ExpectedWins based on the BR formula
	
	*/
	
	var PythagoreanExpectationsWin = function (x,y) {
		
		var winningPercentage = PythagoreanExpectationsCalcWP(x,y);
		
		var wins = Math.floor(winningPercentage * 162);
		
		return wins;
	}
	
	/**
		This calculates the Expected Losses based on the BR formula
	
	*/
	var PythagoreanExpectationsLoss = function (x,y) {
		
		var wins = PythagoreanExpectationsWin(x,y);
		
		var losses = 162 - wins;
		
		
		return losses;
	}
	
	
	var methods = {PythagoreanExpectationsCalcWP:PythagoreanExpectationsCalcWP,
	PythagoreanExpectationsWin:PythagoreanExpectationsWin,
	PythagoreanExpectationsLoss:PythagoreanExpectationsLoss};
	
	
	exports.data = methods;
	
	
