#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.
//Sauce added to order list

var a1title = "I would like\n1 Burger\nwith Everything\nNo Cheese\nand 2* Small Fries.";
var a2title = "2* Cheeseburgers\nwith Sauce\nand Double Pickles.\nAnd 1 Large Fry.";
var a3title = "Hello Again.\n1 Grilled Cheese\nwith 2* Onions\nno Sauce Please.";
var a4title = "2* Small Fries.\n1 Double Burger\nwith Pickle\nand 2* Tomato.\nThanks.";
var a5title = "Give me 1 Burger\nwith 2* Cheese\nDouble Onion\nand Double Sauce.";
var a6title = "Hi!\n2* Large Fries\n2* Small Drinks\n1 Burger\nwith no Onion.";
var a7title = "I am Hungry.\n2 Double\nCheeseburgers\nwith Double Everything.";
	
var a1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    2,//smFriesMade
    1,//pattiesMade
    0,//cheeseMade
    1,//picklesMade
	1,//tomatoesMade
	1,//onionsMade
	1,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a2order = [
    1,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    4,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a3order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    1,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    2,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    1,//picklesMade
	2,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a5order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a6order = [
    2,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2//smDrinksMade
	];
var a7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    4,//pattiesMade
    4,//cheeseMade
    4,//picklesMade
	4,//tomatoesMade
	4,//onionsMade
	4,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];