function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}%`;
    document.getElementById('rainy-background').appendChild(raindrop);
  
    // Remove raindrop after it falls
    setTimeout(() => {
      raindrop.remove();
    }, 5000); // Match this with the CSS animation duration
  }
  
  setInterval(createRaindrop, 22); // Adjust the frequency as needed
  