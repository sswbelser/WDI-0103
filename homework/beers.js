var i = prompt("How many bottles of beer would you like?", 5);

for (i; i>0; i--) {
    if (i > 1) {
        console.log(i + " " + "bottles of beer on the wall, " + i + " " + "bottles of beer!" + " " + "Take one down and pass it around, " + (i-1) + " " + "bottles of beer on the wall!");
    }
    else {
        console.log(i + " " + "bottle of beer on the wall, " + i + " " + "bottle of beer!" + " " + "Take one down and pass it around, no more bottles of beer on the wall!");
    }
}