#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var a1title = "Hello!\n I want\n2 medium fries,\na double burger\nwith 2 pickles,\nand double sauce.";
var a2title = "\n\n1 cheeseburger\nwith 2 of everything,\nand 1 large fry.";
var a3title = "Yes! Finally!\nThat line is long!\n2 burgers with\nonions and sauce\nand 2 small drinks.";
var a4title = "\n\nGive me\n7 cheeseburgers\nthat's right 7.";
var a5title = "You got onions?\n1 cheeseburger\nwith everything\nand double onions.";
var a6title = "Hey\n2 medium drinks\n2 large fries\nand 2 burgers\nplease.";
var a7title = "\n\nJust 2 burgers\nwith double sauce\nI love burgers.";

var b1title = "Hi there!\n I want\n5 medium fries.\n1 double burger\nwith double sauce.\nThat's all!";
var b2title = "\n\n2 cheeseburgers\nwith everything\nand 3 large fries.";
var b3title = "Yes! Finally!\nThat line is long!\n4 burgers with\nonion and sauce,\nand 1 small drink.";
var b4title = "\n\nGive me\n1 cheeseburger\nwith 5 extra cheese.";
var b5title = "Y\n\nou got onions?\n3 cheeseburgers,\nno onions.";
var b6title = "Hey,\n3 small drinks,\n1 large fry,\nand 4 burgers\nplease.";
var b7title = "\n\nJust 5 burgers\nwith onion\nand tomato.";

var c1title = "Hi\n I need\n1 medium drink and\n2 double burgers\nwith cheese.";
	
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
	0//smDrinksMade
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
	0//smDrinksMade
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
	0//smDrinksMade
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
	0//smDrinksMade
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
	0//smDrinksMade
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
	0//smDrinksMade
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
	0//smDrinksMade
	];
	
var b1order = [
    0,//lgFriesMade
    5,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b2order = [
    3,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    2,//picklesMade
	2,//tomatoesMade
	2,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b3order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    4,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	4,//onionsMade
	4,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	1//smDrinksMade
	];
var b4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    6,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b5order = [
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
var b6order = [
    1,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    4,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	3//smDrinksMade
	];
var b7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    5,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	5,//tomatoesMade
	5,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];	
	
var c1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    4,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	1,//mdDrinksMade
	0//smDrinksMade
	];		