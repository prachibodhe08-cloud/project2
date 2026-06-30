const text = [
"Frontend Developer",
"Web Designer",
"JavaScript Learner",
"GitHub Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let letter = "";

function type(){

if(i < text.length){

if(j <= text[i].length){

current = text[i];
letter = current.slice(0,j++);

document.getElementById("typing").textContent = letter;

setTimeout(type,100);

}

else{

j=0;

i++;

setTimeout(type,1000);

}

}

else{

i=0;

type();

}

}

type();