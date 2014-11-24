#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a linebreak with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var a1title = "Hey.\nCan I get 1\nLarge Fry\nand 1 Cheeseburger?";
var a2title = "Could you give me 1\nSmall Fry and\n2 Small Drinks?";
var a3title = "Alright!\n1 Burger with Tomato,\n1 Large Fry\nand,1 Small Drink.";
var a4title = "Burger Machine?\n2 Medium Drinks.\nPlease.";
var a5title = "Hi!\n2 Burgers with\nEverything.";
var a6title = "Can I have\n1 Double Burger\nwith Pickles\nand 2 Medium Fries.";
var a7title = "Hello?\nYeah, give me 1\nTriple Cheeseburger.\nThanks.";
	
var a1order = [
    1,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a2order = [
    0,//lgFriesMade
    0,//mdFriesMade
    1,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2//smDrinksMade
	];
var a3order = [
    1,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	2,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	1//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	2,//mdDrinksMade
	0//smDrinksMade
	];
var a5order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    2,//picklesMade
	2,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
	var a6order = [
    0,//lgFriesMade
    2,//mdFriesMade
    0,//smFriesMade
    3,//pattiesMade
    3,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];