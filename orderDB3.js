#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var c1title = "Hello.\n2* double\nCheeseburgers\nwith Onions.";
var c2title = "Hey. Hey.\nCan I have\n2* Small Fries\nand 2* Large Drinks?";
var c3title = "Yes. Hi.\nOne Burger\nwith Tomato please.\nNo Onions.";
var c4title = "2* Cheeseburgers\nwith Everything.\nThanks.";
var c5title = "Woo!\nBurger Machine!\n2* Double Burgers\nwith Double Onions\nand 2* Large Fries!\nThanks!";
var c6title = "One Quad\nCheeseburger\nOne Large Fry\nand 2* Pickles\non the side.";
var c7title = "Can I have\n2* Medium Drinks\nOne Small Fry\nand 2* Double Burgers?";
	
var c1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    4,//pattiesMade
    4,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var c2order = [
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
	0//smDrinksMade
	];
var c3order = [
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
	1//smDrinksMade
	];
var c4order = [
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
	0//smDrinksMade
	];
var c5order = [
    2,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    4,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	4,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var c6order = [
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
	0//smDrinksMade
	];
var c7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    1,//smFriesMade
    4,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	2,//mdDrinksMade
	0//smDrinksMade
	];