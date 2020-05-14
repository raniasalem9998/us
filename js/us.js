
"use strict"

var d = new Date();
var n = d.getUTCDay();
document.write(d)


var like;
var per = prompt("Ready? yes/no");
if (per == "no") {
    like = "NANI?!";
}
if (per == "yes") {
   like = "yahoo";
}
else {
    like = "REFRESH";
}
document.write('<h3>'+ like +'</h3>')






