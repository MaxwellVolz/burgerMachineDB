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

var a1title = "I would like\n1 burger\nwith everything\nno cheese\nand 2 small fries.";
var a2title = "2 cheeseburgers\nwith sauce\ndouble pickles\nand 1 large fry.";
var a3title = "Hello again\n1 grilled cheese\nwith 2 onions\nno sauce please.";
var a4title = "2 small fries\n1 double burger\nwith pickle\nand 2 tomato\nthanks.";
var a5title = "Give me 1 Burger\nwith 2 cheese\ndouble onion\nand double sauce.";
var a6title = "Hi\n2 large fries\n2 small drinks\n1 burger\nwith no onion.";
var a7title = "I am hungry\n2 double\ncheeseburgers\nwith everything.";

var b1title = "I want\n2 burgers\nwith cheese\nno pickles\nand 4 small fries.";
var b2title = "\n1 cheeseburgers\nwith sauce\nand 3 large drinks.";
var b3title = "Hello\n1 cheeseburger\nwith extra cheese\nand 2 medium fries.";
var b4title = "4 small fries\n1 double burger\nno pickle\nand 3 tomato\nthanks.";
var b5title = "Give me 2 burgers\nwith 2 cheese\nand sauce.";
var b6title = "Hi\n1 large fry\n3 small drinks\n2 burgers\nwith onion.";
var b7title = "I am hungry\n2 cheeseburgers\nwith double everything.";

var c1title = "I would like\n2 burgers\nwith everything\nand 1 small fry.";
	
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
    2,//picklesMade
	2,//tomatoesMade
	2,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
	
var b1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    4,//smFriesMade
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
var b2order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	1,//sauceMade
	3,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b3order = [
    0,//lgFriesMade
    2,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    4,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	3,//tomatoesMade
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
    2,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	2,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b6order = [
    1,//lgFriesMade
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
	3//smDrinksMade
	];
var b7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    4,//picklesMade
	4,//tomatoesMade
	4,//onionsMade
	4,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
	
var c1order = [
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