function startExperience() {
    nextPage(2);
    const video = document.getElementById('myVideo');
    if (video) {
        video.play().catch(error => {
            console.log("Autoplay prevented.");
        });
    }
}

function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + pageNumber).classList.add('active');
}

const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * (maxX - 20)) + 10;
    const randomY = Math.floor(Math.random() * (maxY - 20)) + 10;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

function celebrate() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('celebration').classList.add('active');
    
    const celebVideo = document.getElementById('celebrationVideo');
    if (celebVideo) {
        celebVideo.play();
    }
    
    for(let i = 0; i < 50; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.zIndex = '1000';
    heart.style.transition = 'transform 3s linear, opacity 3s';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = `translateY(-110vh) translateX(${Math.random() * 100 - 50}px)`;
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}