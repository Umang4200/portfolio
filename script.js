const textArray = ["HTML", "CSS", "JavaScript"];
let textIndex = 0;
let charIndex = 0;
let typingEffect = document.getElementById("typing-effect");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typingEffect.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingEffect.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

typeText();
