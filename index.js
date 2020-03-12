window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');

    //add some visualization when playing music
    const visual = document.querySelector('.visual');
    //get colors from css
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    //lets get the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            //need to reset play for each sound so we can play multiple sounds when we click
            sounds[index].currentTime = 0;
            //play the sound
            sounds[index].play();
            //execute createBubble function below
            createBubbles(index);
        });
    });

    //create function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        //attache div for bubble to div with a class of visual
        visual.appendChild(bubble);
        //change bubble
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        //need to end bubble after each time otherwize they will be added to the div and our app will crash
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this)
        })
    }
});