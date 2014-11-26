#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.
//Onions Added to Order List

var a1title = "Hello.\n1 Double\nCheeseburger\nwith Double Onions.";
var a2title = "Hey. Hey.\nCan I have\n2* Small Fries\nand 2* Large Drinks?";
var a3title = "Yes. Hi.\n1 Burger\nwith Tomato please.\nNo Onions.\nand 2* Small Drinks.";
var a4title = "2 Cheeseburgers\nwith Everything.\nThanks.";
var a5title = "Woo!\nBurger Machine!\n1 Double Burger\nwith Double Onions\nand 2* Large Fries!\nThanks!";
var a6title = "1 Quad\nCheeseburger\n1 Large Fry\nand 2* Pickles\non the side.";
var a7title = "Can I have\n2* Medium Drinks\n1 Small Fry\nand 2* Burgers?";
	
var a1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a2order = [
    0,//lgFriesMade
    0,//mdFriesMade
    2,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	2,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a3order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	1,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2,//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    2,//picklesMade
	2,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a5order = [
    2,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a6order = [
    1,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    4,//pattiesMade
    4,//cheeseMade
    2,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    1,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	2,//mdDrinksMade
	0,//smDrinksMade
	];