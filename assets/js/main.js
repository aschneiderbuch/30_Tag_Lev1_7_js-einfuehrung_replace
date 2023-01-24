console.log("test?");

/* 
Frage

replace

const text = "Sam is good at codingschool";

alles in Variablen speichern

ausgabe in Html
    1. Sam is bad at school
    2. Sam is good at school
    3. Sam is good at tennis

*/


const text = "Sam is good at codingschool";

let bad = "bad";
console.log(bad);
let school = "school";
console.log(school);
let tennis = "tennis";
console.log(tennis);

let neuMitBad = text.replace("good", bad);
console.log(neuMitBad);
document.write(neuMitBad + " "+ "</br>");

let neuMitSchool = text.replace("codingschool", school);
console.log(neuMitSchool);
document.write(neuMitSchool + " "+ "</br>");

let neuMitTennis = text.replace("codingschool", tennis);
console.log(neuMitTennis);
document.write(neuMitTennis + " " + "</br>");
