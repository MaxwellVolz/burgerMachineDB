#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a linebreak with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var a1title = "Hey.\nCan you make me One\nLarge Fry\nand One\nCheeseburger?";
var a2title = "Could you do One\nSmall Fry and\n2* Small Drinks?";
var a3title = "All right!\nOne Burger\nwith Tomato\nand One Large Fry.";
var a4title = "Burger Machine?\n2* Medium Drinks.\nPlease.";
var a5title = "Hi!\n2* Burgers with\nEverything on it.";
var a6title = "Can I have\nOne Double Burger\nwith Pickles\nand 2*\nMedium Fries.";
var a7title = "Hello?\nYeah. One\nTriple Cheeseburger.\nThanks.";
	
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
	1,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
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
    1,//cheeseMade
    1,//picklesMade
	1,//tomatoesMade
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
    2,//pattiesMade
    0,//cheeseMade
    1,//picklesMade
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