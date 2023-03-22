// var a=3
// console.log("a = "+a)
// alert (a+a)
// document.write("<p> Value of a is </p>"+a)


// function avg(a,b,c){
//     var s=a+b+c;
//     return s/3;
// }

// teamA=avg(50,75,90);
// teamB=avg(65,70,80);
// console.log("teamA"+teamA);
// console.log(teamB);


var avg=function(a,b,c){
    return a+b+c/3;
}
console.log("Team A average: "+avg(50,75,90));
console.log("Team B average: "+avg(65,70,80));