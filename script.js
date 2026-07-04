const words = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "UI/UX Designer",
    "Freelancer"
];

let i = 0;
let j = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

// Blinking cursor
const cursor = document.createElement("span");
cursor.textContent = "|";
typing.after(cursor);

setInterval(() => {
    cursor.style.visibility =
        cursor.style.visibility === "hidden" ? "visible" : "hidden";
}, 500);

function type() {
    const current = words[i];

    if (!isDeleting) {
        typing.textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        typing.textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            j = 0;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, isDeleting ? 70 : 120);
}

type();
