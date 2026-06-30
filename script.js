const text=[
"Frontend Developer",
"Creative Designer",
"JavaScript Learner",
"Future Full Stack Developer"
];

let i=0;
let j=0;

function type(){

if(j<text[i].length){

document.getElementById("typing").innerHTML+=text[i].charAt(j);

j++;

setTimeout(type,100);

}

else{

setTimeout(erase,1200);

}

}

function erase(){

if(j>0){

document.getElementById("typing").innerHTML=text[i].substring(0,j-1);

j--;

setTimeout(erase,50);

}

else{

i=(i+1)%text.length;

setTimeout(type,300);

}

}

type();