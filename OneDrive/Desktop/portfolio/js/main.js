document.addEventListener("DOMContentLoaded", () => {

    startTyping();
    startParticles();

});

/* TYPING EFFECT */
function startTyping() {
    const text = "Software Developer | Applied AI";
    const el = document.getElementById("typing-text");
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 70);
        }
    }
    type();
}

/* PARTICLES */
function startParticles() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
            color: { value: "#00ffd5" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 2 },
            line_linked: {
                enable: true,
                distance: 120,
                color: "#00ffd5",
                opacity: 0.25,
                width: 1
            },
            move: { enable: true, speed: 1.2 }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" }
            }
        },
        retina_detect: true
    });
}

/* CTA */
function goToPortfolio() {
    window.location.href = "portfolio.html";
}
