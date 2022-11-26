                            // DAY 4 TASK
// 1st Question
// How to compare two JSON have the same properties without order?
// solution
var obj1 = {
    "name" : "Person 1",
    "age" : "5"
};
var obj2 = {
    "age" : "5",
    "name" : "Person 1"
};
console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
//OUTPUT
// false

// 2nd Question
// Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in the console
// solution
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){

    var data = request.response;

    var result = JSON.parse(data);

    for(var i of result){

        console.log(i.flags.png);

    }

}

// 3rd Question
// Use the same rest countries and print all countries names,regions,subregion and populations?
// solution
var request1 = new XMLHttpRequest();

request1.open("GET", "https://restcountries.com/v3.1/all");

request1.send();

request1.onload = function(){

    var data1 = request1.response;

    var result1 = JSON.parse(data1);

    for(var j of result1){

        console.log(j.name.common, j.region, j.subregion, j.population);

    }

}
