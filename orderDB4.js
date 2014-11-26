#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var a1title = "Hey there.\n2* Burgers\nno cheese\nwith Everything.";
var a2title = "Yo.\n1 Triple\nCheeseburger\nwith Onion.\nNo Pickle.\nAnd 2* Small Drinks.";
var a3title = "Hola.\n2* Large Fries\n1 Medium Drinks\n1 Pickle\nand 2* Burgers.\nGracias.";
var a4title = "Can I get\n2* Cheeseburgers\nno Tomato\nno Pickle\nno Onion\nand 1 Small Fries?";
var a5title = "Can You make me\n1 Grilled Cheese\nwith Everything?\nAnd 2* Medium Fries.";
var a6title = "\nI want 2* Pickles!";
var a7title = "Dude...\nUhh...\nCheeseburger.\nDouble Onions.\nDrink.\nLarge.";
	
var a1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    2,//picklesMade
	2,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a2order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    3,//pattiesMade
    3,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	1,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2//smDrinksMade
	];
var a3order = [
    2,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    1,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	1,//mdDrinksMade
	0//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    1,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a5order = [
    0,//lgFriesMade
    2,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    1,//cheeseMade
    1,//picklesMade
	1,//tomatoesMade
	1,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a6order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    2,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	1,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];