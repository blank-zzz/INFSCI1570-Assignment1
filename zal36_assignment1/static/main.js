console.log("What are you looking for here?")

// Manages the naviagtion menu in the header, on click check...
//      If menu is hidden -> show it    If menu is visible -> hide it
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Manages the reading quiz on index, outputs grade
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reading-quiz');
  const output = document.getElementById('output');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let score = 0;
    const total = 6;
    const q7 = form.querySelector(`input[name="q7"]:checked`);
    let opinion = "";

    // Grade q1–q6
    for (let i = 1; i <= total; i++) {
      const selected = form.querySelector(`input[name="q${i}"]:checked`);
      if (selected && selected.value === "True") {
        score++;
      }
    }
    if (q7) {
      opinion = `<p>That's great! I think the <strong>${q7.value}</strong> is cool too!</p>`;
    }

    output.innerHTML = `
      <strong>You scored ${score} / ${total}</strong>
      ${opinion}
    `;
  });
});
