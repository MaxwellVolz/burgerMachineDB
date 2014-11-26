#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.
//Final Round

var a1title = "Hope you're ready.\n1 Double Burger\nwith 2*Tomato\nno Onion\nDouble Pickle\nand Double Sauce.";
var a2title = "Oh Boy!\n2 Triple\nCheeseburgers\nno Pickle\nDouble Onion.";
var a3title = "I'm starving!\nHurry up!\n2* Small Drinks\n2* Large Fries\n2* Medium Fries.";
var a4title = "2* Double\nCheeseburgers.\nPlease.";
var a5title = "Hello?\n2* Double\nGrilled Cheeses\nwith Onion.\nThanks.";
var a6title = "I want\n1 Double Cheeseburger\nno cheese\nwith 2* Sauce.\nand 2* Large Drinks.";
var a7title = "I am the CEO of\nBurger Machine 2020\nYou Win!\nSo make me\n1 Burger.";
	
var a1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    2,//picklesMade
	2,//tomatoesMade
	0,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a2order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    6,//pattiesMade
    6,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	4,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a3order = [
    2,//lgFriesMade
    2,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	1,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
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
var a5order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    4,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a6order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	2,//sauceMade
	2,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a7order = [
    0,//lgFriesMade
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
	0//smDrinksMade
	];