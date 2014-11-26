#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var a1title = "Hello.\n I want\n2* Medium Fries\n1 Double Burger\nwith 2* Pickles\nand Double Sauce.";
var a2title = "1 Cheeseburger\nwith 2* of Everything\nand 1 Large Fry.";
var a3title = "Yes! Finally!\nThat line is Long!\n2* Burgers with\nOnion and Sauce\nand 2* Small Drinks.";
var a4title = "Give Me\n7 Cheeseburgers\nThats right 7.";
var a5title = "You got Onions?\n1 Cheeseburger\nwith Everything\nand Double Onions.";
var a6title = "Hey.\n2* Medium Drinks\n2* Large Fries\nand 2* Burgers.\nPlease.";
var a7title = "Just 1 Pickle.\nI love Pickle.";
	
var a1order = [
    0,//lgFriesMade
    2,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    2,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a2order = [
    1,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    2,//picklesMade
	2,//tomatoesMade
	2,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a3order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	1,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    7,//pattiesMade
    7,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a5order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    1,//picklesMade
	1,//tomatoesMade
	2,//onionsMade
	1,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];
var a6order = [
    2,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
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
var a7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    1,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0,//smDrinksMade
	];