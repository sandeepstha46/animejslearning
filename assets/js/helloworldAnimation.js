
const $span = document.querySelectorAll('.span-tag');

console.log($span);


anime.animate($span, {
    // Property keyframes
    y: [
        { to: '-1.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],

    rotate: {
        from: '-1turn',
        delay: 5
    },
    delay: (_, i) => i * 50,
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: true
});


