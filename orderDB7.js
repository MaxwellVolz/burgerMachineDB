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

var a1title = "Hope you're ready\n1 double burger\nwith 2 tomato\nno onion\ndouble pickle\nand double sauce.";
var a2title = "Oh boy\n2 triple\ncheeseburgers\nno pickle\ndouble onion.";
var a3title = "I'm starving\nhurry up\n2 small drinks\n2 large fries\n2 medium fries.";
var a4title = "2 double\ncheeseburgers\nplease.";
var a5title = "Hello\n2 double\ngrilled cheeses\nwith onion\nthanks.";
var a6title = "I want\n1 double cheeseburger\nno cheese\nwith 2 sauce\nand 2 large drinks.";
var a7title = "I am the CEO of\nBurger Machine 2020\nYou Win!\nso make me\n1 burger.";

var b1title = "Hope you're ready\n3 cheeseburgers\nwith tomato\nno onion\ndouble pickle\nand 1 small fry.";
var b2title = "Oh good\n1 quad\ncheeseburger\nno pickle\n5 onion.";
var b3title = "I am starving\n2 large drinks\n6 small fries\nand 4 medium fries.";
var b4title = "4 double\ncheeseburgers\nplease.";
var b5title = "Hey\n5 ngrilled cheeses\nwith onion\nthanks.";
var b6title = "I need\n1 double cheeseburger\nwith 4 sauce\nand 6 large drinks.";
var b7title = "I am the CEO of\nBurger Machine 2020\nYou Win!\nso make me\n1 grilled cheese.";
	
var c1title = "Hope you're ready\n1 double burger\nwith 2 onion\nno sauce\n4 pickles\nand 3 small fries.";
	
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
	
var b1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    1,//smFriesMade
    3,//pattiesMade
    3,//cheeseMade
    6,//picklesMade
	3,//tomatoesMade
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
    4,//pattiesMade
    4,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	5,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b3order = [
    0,//lgFriesMade
    4,//mdFriesMade
    6,//smFriesMade
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
var b4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    8,//pattiesMade
    8,//cheeseMade
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
    0,//pattiesMade
    5,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	5,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b6order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	4,//sauceMade
	6,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    1,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
	
var c1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    3,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    4,//picklesMade
	0,//tomatoesMade
	2,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];	