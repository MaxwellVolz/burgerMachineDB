#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var a1title = "Hi.\nI want 1\nDouble Cheeseburger\nwith Pickles\nand 1 Small Fry.";
var a2title = "Hey There.\nCan I have\n2* Small Drinks\na Large Fry\nand 2*\nCheeseburgers?";
var a3title = "1 Cheeseburger\nwith 2*\nof Everything.";
var a4title = "Cool! Just 2*\nMedium Fries and\n1 Small Drink.";
var a5title = "Yo! Yo!\nLet me have\n2* Burgers\nwith Pickle\nand Tomato.";
var a6title = "Hello.\n1 Burger\n1 Large Drink\nand 2* Small Fries.\nThanks.";
var a7title = "Can I have\n2* Drinks\nSmall\nMedium\nand Large?\nThank You!";
	
var a1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    1,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    1,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a2order = [
    1,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2,//smDrinksMade
	];
var a3order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    2,//picklesMade
	2,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	1,//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    2,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	1,//smDrinksMade
	];
var a5order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    1,//picklesMade
	1,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a6order = [
    0,//lgFriesMade
    0,//mdFriesMade
    2,//smFriesMade
    1,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	1,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	2,//lgDrinksMade
	2,//mdDrinksMade
	2,//smDrinksMade
	];