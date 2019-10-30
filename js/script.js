
console.log("hi");

$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

$("#button").click(function
(){

let word =
$(".input").val();

$(".output").text(word);

console.log(word);
})

});
