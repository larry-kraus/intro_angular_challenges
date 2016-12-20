console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("SecondController", SecondController);

function WelcomeController(){
  this.full_name = "Larry Kraus"
  this.age = 27;
  this.city = "Pittsburgh";
  this.state = "PA";
  this.shout = function(input) {
  	input = input || "";
  	var output = input.toUpperCase();
  	return output + "!";
  }
};

function SecondController(){
	this.class_name = "Big Nick's Cult of Zebulon Online";
	this.enrolled_students = 10;
	this.start_date = "10/31/16";
	this.end_date = "2/2/17";

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;

	this.daysRemaining = function() {
		if (mm = 12) {
			return 33 + (31-dd);
		}
		else if (mm = 1) {
			return (33 - dd);
		}
		else {return "...like... none?"};
	}
};

