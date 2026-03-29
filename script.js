const slider = document.getElementById('volume-slider');
const display = document.getElementById('perc-display');
const card = document.getElementById('main-card');
const breakSound = document.getElementById('break-sound');
const annoyingSound = document.getElementById('ear-rape-sound');

slider.addEventListener('input', () => {
    const val = slider.value;
    display.innerText = val + "%";

    // Slider color change based on danger
    if (val > 80) {
        display.style.color = "#f44336";
        slider.style.background = `linear-gradient(90deg, #f44336 ${val}%, #ddd ${val}%)`;
    } else {
        display.style.color = "#4CAF50";
        slider.style.background = `linear-gradient(90deg, #4CAF50 ${val}%, #ddd ${val}%)`;
    }

    // THE TRIGGER: 100% Reach
    if (val == 100) {
        triggerPrank();
    }
});
slider.addEventListener('mousedown', () => { annoyingSound.play(); annoyingSound.pause(); });
slider.addEventListener('touchstart', () => { annoyingSound.play(); annoyingSound.pause(); });

    // 1. Play Break Sound
 // 1. Play Break Sound with Error Handling
breakSound.play().catch(e => console.log("Sound error:", e));
   breakSound.play();

    // 2. Start Annoying High Pitch Sound
    setTimeout(() => {
        annoyingSound.currentTime = 0;
        annoyingSound.play();
        // Pitch ko badhane ke liye speed change
        annoyingSound.playbackRate = 2.0; 
    }, 200);

    // 3. Elements ko "Gira" do (Physics feel)
    card.classList.add('fall-down');
    
    // 4. Vibration (Android only)
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 1000]);
    }

    // 5. Screen Shake
    document.body.classList.add('shake');

    // 6. Alert for extra frustration
    setTimeout(() => {
        alert("SYSTEM OVERLOAD: Volume Slider Hardware Failure!");
    }, 1500);
}
