const container = document.querySelector('.scroll-container');
const debug = true;

// Animation

anime.animate('.square', {
    x: '15rem',
    rotate: '1turn',
    duration: 2000,
    alternate: true,
    loop: true,
    autoplay: onScroll({
        container,
        sync: true,
        debug })
});

// Timer

const $timer = document.querySelector('.timer');

anime.createTimer( $timer, {
    duration: 2000,
    alternate: true,
    loop: true,
    onUpdate: self => {
        $timer.innerHTML = self.iterationCurrentTime
    },
    autoplay: onScroll({
        target: $timer.parentNode,
        container: '.timer-container',
        sync: true,
        debug
    })
});

// Timeline

const circles = document.querySelectorAll('.circle');

anime.createTimeline( {
    alternate: true,
    loop: true,
    autoplay: onScroll({
        target: circles[0],
        container: '.circle-container',
        sync: true,
        debug
    })
})
    .add(circles[2], { x: '9rem' })
    .add(circles[1], { x: '9rem' })
    .add(circles[0], { x: '9rem' });