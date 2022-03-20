window.addEventListener('load',()=> {
    const sounds = document.querySelectorAll('.sound');
    const pads =  document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');

    const colors= [
        '#60d394',
        '#d1d360',
        '#60aed3',
        '#c960d3',
        '#d36060',
        '#c2d360'
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function (){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    // create bubbles function
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animation', function() {
            visual.removeChild(this);
        })
    };
});