const skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "NodeJS", "SQL", "Scrum"];
const typewriter = document.getElementById("typewriter");

let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentSkill = skills[skillIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typewriter.textContent = currentSkill.substring(0, charIndex);

    let typingSpeed = isDeleting ? 50 : 90; // Mais fluido: digita mais devagar, apaga mais rápido

    if (!isDeleting && charIndex === currentSkill.length) {
        // Espera antes de começar a apagar
        isDeleting = true;
        typingSpeed = 3000;
    } else if (isDeleting && charIndex === 0) {
        // Passa para a próxima palavra
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
}

type();