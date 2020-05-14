
"use strict"

var d = new Date();
var n = d.getUTCDay();
document.write(d)


var like;
var per = prompt("Do you like our page so far? yes/no");
if (per == "no") {
    like = "Ohh .. please contact us why.";
}
if (per == "yes") {
   like = "Thanks!";
}
else {
    like = "NANI?!";
}
document.write('<h3>'+ like +'</h3>')






