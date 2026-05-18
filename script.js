// Add your custom messages into this array list
const messages = [
    "Hey... I made this for you because I wanted to say I'm truly sorry. 🥺",
    "I've been thinking a lot about what happened, and I hate that I hurt your feelings.",
    "You mean a lot to me, and our relationship is something I never want to lose. 🌸",
    "I promise to listen better and be more mindful moving forward.",
    "Thank you for reading through this... dynamic text test! Last slide."
];

let currentIndex = 0;

const cardText = document.getElementById('cardText');
const cardNumber = document.getElementById('cardNumber');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flashcard = document.getElementById('flashcard');
const actionArea = document.getElementById('actionArea');
const noBtn = document.getElementById('noBtn');

function updateCard() {
    // Smooth transition effect
    flashcard.style.opacity = 0;
    flashcard.style.transform = "scale(0.95)";
    
    setTimeout(() => {
        cardText.innerText = messages[currentIndex];
        cardNumber.innerText = `${currentIndex + 1}/${messages.length}`;
        
        // Disable "Previous" button if on the first card
        prevBtn.disabled = currentIndex === 0;
        
        // Show choice buttons only when they reach the very last card
        if (currentIndex === messages.length - 1) {
            actionArea.classList.remove('id-hidden');
            nextBtn.disabled = true;
        } else {
            actionArea.classList.add('id-hidden');
            nextBtn.disabled = false;
        }
        
        flashcard.style.opacity = 1;
        flashcard.style.transform = "scale(1)";
    }, 150);
}

function nextCard() {
    if (currentIndex < messages.length - 1) {
        currentIndex++;
        updateCard();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
}

// Runaway "No" button logic
function moveNoButton() {
    const actionWidth = actionArea.clientWidth;
    const randomX = Math.floor(Math.random() * (actionWidth - noBtn.clientWidth - 40)) + 20;
    const randomY = Math.floor(Math.random() * 40) - 20; // limits vertical movement 
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

function acceptApology() {
    flashcard.innerHTML = `
        <h1 style="font-size: 50px; margin-bottom:10px;">❤️</h1>
        <h2 style="color:#ff4d6d;">Thank you!</h2>
        <p style="margin-top:10px;">It means everything to me. I will text you now.</p>
    `;
    actionArea.style.display = 'none';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

// Initialize the first card view
updateCard();
