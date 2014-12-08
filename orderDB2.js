#pragma strict

function Start () {

}

function Update () {

}

//title format
//less than 19 characters per line
//create a line-break with \n no spaces needed
//6 lines maximum - short orders can start with a \n - needs testing.

var a1title = "Hi,\nI want a\ncheeseburger\nwith pickles,\nand 1 small fry.";
var a2title = "Hey there,\ncan I have 2 small\n drinks, 1 large\n fry, and a\ncheeseburger?";
var a3title = "\n\n\n1 cheeseburger\nwith everything.";
var a4title = "\nCool, just 2\nmedium fries and\n1 small drink.";
var a5title = "Yo Yo.\nLet me have\n2 burgers\nwith pickles\nand tomatoes.";
var a6title = "Hello,\n1 burger,\n1 large drink,\nand 2 small fries.\nThanks.";
var a7title = "Can I have 2\nsmall, medium\n and large drinks.\nThank you!";

var b1title = "\n\nI want a\ndouble cheeseburger.";
var b2title = "Hey..\nCan I have 1 small\n drink, 2 large\n fries and 2\ncheeseburgers?";
var b3title = "\n1 cheeseburger\nwith everything\nno pickle please.";
var b4title = "\nNeat! Just 2\nsmall fries and\n2 small drinks.";
var b5title = "Yo.\nLet me have\n3 burgers\nwith pickles.";
var b6title = "Hello!\n1 burger\nwith triple cheese\nand 2 small drinks.\nThanks.";
var b7title = "Can I get\n2 small, medium\nand large fries?\nThank you!";
	
var c1title = "\nHey.\nI need 2\ncheeseburgers\nwith tomatoes.";	
	
var a1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    1,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    1,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
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
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2//smDrinksMade
	];
var a3order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    1,//pattiesMade
    1,//cheeseMade
    1,//picklesMade
	1,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a4order = [
    0,//lgFriesMade
    2,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	1//smDrinksMade
	];
var a5order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    0,//cheeseMade
    2,//picklesMade
	2,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a6order = [
    0,//lgFriesMade
    0,//mdFriesMade
    2,//smFriesMade
    1,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	1,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];
var a7order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	2,//lgDrinksMade
	2,//mdDrinksMade
	2//smDrinksMade
	];
	
var b1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
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
    2,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	1//smDrinksMade
	];
var b3order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
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
var b4order = [
    0,//lgFriesMade
    0,//mdFriesMade
    2,//smFriesMade
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
var b5order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    3,//pattiesMade
    0,//cheeseMade
    3,//picklesMade
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
    3,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	2//smDrinksMade
	];
var b7order = [
    2,//lgFriesMade
    2,//mdFriesMade
    2,//smFriesMade
    0,//pattiesMade
    0,//cheeseMade
    0,//picklesMade
	0,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	2,//lgDrinksMade
	2,//mdDrinksMade
	2//smDrinksMade
	];
	
var c1order = [
    0,//lgFriesMade
    0,//mdFriesMade
    0,//smFriesMade
    2,//pattiesMade
    2,//cheeseMade
    0,//picklesMade
	2,//tomatoesMade
	0,//onionsMade
	0,//sauceMade
	0,//lgDrinksMade
	0,//mdDrinksMade
	0//smDrinksMade
	];