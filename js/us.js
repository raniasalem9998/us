
"use strict"

var d = new Date();
var n = d.getUTCDay();
document.write(d)

function hru(){
    var like;
    var per = prompt("Ready? yes/no");
    if (per == "no") {
        like = "NANI?!";
    }
    else if (per == "yes") {
       like = "thats the spirit!";
    }
    else {
        confirm ("REFRESH");
    }
    return like;
}







