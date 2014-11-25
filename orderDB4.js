#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var d1title = "He there.\n2* Burgers\nNo cheese\nwith Everything.";
var d2title = "Yo.\nOne Triple\nCheeseburger\nwith Onion.\nNo Pickle.\nAnd 2* Small Drinks.";
var d3title = "Hola.\n2* Large Fries\n2* Medium Drinks\nOne Pickle\nand 2* Burgers.\nGracias.";
var d4title = "Can I get\n2* Double Cheeseburgers.\nNo Tomato.\nNo Pickle.\nNo Onion.\nAnd 2* Small Fries?";
var d5title = "Can You make me\nOne Grilled Cheese\nwith Everything?\nAnd 2* Medium Fries.";
var d6title = "\nI want 2* Pickles!";
var d7title = "Dude...\nUhh...\nCheeseburger.\nDouble Onions.\nDrink.\nLarge.";
	
var d1order = [
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
var d2order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	1,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var d3order = [
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
	2,//mdDrinksMade
	0//smDrinksMade
	];
var d4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    2,//smFriesMade
    4,//pattiesMade
    4,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var d5order = [
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
var d6order = [
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
var d7order = [
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