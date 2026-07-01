const words = [
"Web Developer",
"Frontend Developer",
"JavaScript Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

current = words[i];

if (!isDeleting) {

document.getElementById("typing").textContent =
current.substring(0, j++);

if (j > current.length) {

isDeleting = true;

setTimeout(type, 1000);

return;

}

}

else{

document.getElementById("typing").textContent =
current.substring(0, j--);

if (j == 0) {

isDeleting = false;

i++;

if(i==words.length){
i=0;
}

}

}

setTimeout(type,120);

}

type();