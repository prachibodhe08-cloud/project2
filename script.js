window.onload = function () {

  const el = document.getElementById("typing");

  if (!el) return;

  const words = [
    "Frontend Developer",
    "Web Developer",
    "UI Designer",
    "JavaScript Developer"
  ];

  let i = 0;
  let text = "";
  let isDeleting = false;

  function run() {

    let current = words[i];

    if (isDeleting) {
      text = current.substring(0, text.length - 1);
    } else {
      text = current.substring(0, text.length + 1);
    }

    el.innerHTML = text;

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && text === current) {
      speed = 1000;
      isDeleting = true;
    }

    if (isDeleting && text === "") {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(run, speed);
  }

  run();
};
