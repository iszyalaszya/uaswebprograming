const textElement = document.getElementById("typing-text");
const texts = ["Alfin Cr"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

// Fungsi mengetik
function typeEffect() {
    if (!isDeleting && charIndex < texts[index].length) {
        currentText += texts[index][charIndex];
        charIndex++;
        textElement.textContent = currentText;
    } else if (isDeleting && charIndex > 0) {
        currentText = currentText.slice(0, -1);
        charIndex--;
        textElement.textContent = currentText;
    }

    if (!isDeleting && charIndex === texts[index].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Tunggu sebelum menghapus
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 500); // Tunggu sebelum mengetik
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}

// Jalankan efek mengetik
typeEffect();
