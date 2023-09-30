var color = prompt("Enter recplce color")


var newcolor2 = prompt("Enter new color")

var colors = ["white", "green", "blue"]
if (colors.indexOf(color) == -1) {
    console.log("invalid")
    
} else {
    colors[colors.indexOf(color)] = newcolor2

    console.log(colors)
}