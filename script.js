const noBtn = document.getElementById('noBtn');
const card = document.getElementById('letterCard');

// Moves the "No" button randomly when hovered or tapped
function moveNoButton() {
    const cardWidth = card.clientWidth;
    const cardHeight = card.clientHeight;
    
    // Calculate random position within the card boundaries
    const randomX = Math.floor(Math.random() * (cardWidth - noBtn.clientWidth - 40)) + 20;
    const randomY = Math.floor(Math.random() * (cardHeight - noBtn.clientHeight - 100)) + 50;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents accidental clicks on mobile
    moveNoButton();
});

function acceptApology() {
    card.innerHTML = `
        <h1 style="font-size: 40px;">❤️</h1>
        <h1>Thank you!</h1>
        <p>It means the world to me. I'll message you right now.</p>
    `;
}
