const texts = ["Bem vindo", "A Hub Company." ]; const textElement = document.getElementById("title"); let textIndex = 0
let charIndex = 0
let cursorVisible; function updateCursor() { let cursor = document.getElementById("cursor"); if (!cursor) { textElement.innerHTML += "<span id='cursor'>|</span>" } else { cursor.remove(); } }
function typeText() { if (charIndex < texts[textIndex].length) { textElement.innerHTML += texts[textIndex].charAt(charIndex); charIndex++; updateCursor(); setTimeout(typeText, 100); } else { setTimeout(deleteText, 2000); } }
function deleteText() { if (charIndex > 0) { textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1); charIndex--; updateCursor(); setTimeout(deleteText, 50); } else { textIndex = (textIndex + 1) % texts.length; setTimeout(typeText, 500); } }
typeText();