#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var a1title = "Hey there\n2 burgers\nno cheese\nwith everything.";
var a2title = "Yo\n1 triple\ncheeseburger\nwith onion\nno pickle\nand 2 small drinks.";
var a3title = "Hola\n2 large fries\n1 medium drink\n1 pickle\nand 1 burger\ngracias.";
var a4title = "Can I get\n2 cheeseburgers\nno tomato\nno pickle\nno onion\nand 1 small fry?";
var a5title = "\nCan you make me\n1 grilled cheese\nwith everything?";
var a6title = "\n\nI want 2 pickles!";
var a7title = "Dude\nuhh\ncheeseburger\ndouble onions\ndrink\nlarge.";
	
var b1title = "\nHello\n4 cheeseburgers\nwith onion.";
var b2title = "Hey\n2 double\ncheeseburgers\nnno pickle\nand 2 small drinks.";
var b3title = "Hi there\n2 large fries\n2 medium drink\n3 pickle\nand 1 burger\nthanks.";
var b4title = "Can I have\n1 cheeseburger\nwith tomato\nno pickle\nno onion\nand 4 small fries?";
var b5title = "\n\nLet me have like\n4 cheese slices.";
var b6title = "\nJust a\ncheeseburger\nwith extra cheese.";
var b7title = "Dude\n4 large fries\n3 medium drinks\nand 2 small fries.";	
	
var c1title = "Hello\n3 cheeseburgers\nno onion.";	
	
var a1order = [
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
var a2order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    3,//pattiesMade
    3,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	1,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2//smDrinksMade
	];
var a3order = [
    2,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    0,//cheeseMade
    1,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	1,//mdDrinksMade
	0//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    1,//smFriesMade
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
var a5order = [
    0,//lgFriesMade
    0,//mdFriesMade
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
var a6order = [
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
var a7order = [
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
	
var b1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    4,//pattiesMade
    4,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	4,//onionsMade
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
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2//smDrinksMade
	];
var b3order = [
    2,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    0,//cheeseMade
    3,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	2,//mdDrinksMade
	0//smDrinksMade
	];
var b4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    4,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    0,//picklesMade
	1,//tomatoesMade
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
    4,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b6order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var b7order = [
    4,//lgFriesMade
    0,//mdFriesMade
    2,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	3,//mdDrinksMade
	0//smDrinksMade
	];
	
var c1order = [
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