let person = prompt("Please enter your name");
if (person != null) {
    document.getElementById("name").innerHTML = "My name is " + person ;
}

let where = prompt("Where did you go to for your vacation and who did you go with?");
if (where != null) {
    document.getElementById("who").innerHTML = where;
}
let duration = prompt("How long was the vacation?");
if (duration != null) {
    document.getElementById("duration").innerHTML = duration;
}
let landmarks = prompt("Which landmarks did you see and how did you feel about it?");
if (landmarks != null) {
    document.getElementById("landmark").innerHTML = landmarks;
}
let favourite = prompt("What are your favourite things about the vacation?");
if (favourite != null) {
    document.getElementById("favourites").innerHTML = favourite + " are my favourite things about the vacation";
}
let again = prompt("If you had the chance to re-do the whole vacation thing again, would you still go for it?");
if (again != null) {
    document.getElementById("again").innerHTML = again;
}