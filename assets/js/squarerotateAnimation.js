anime.waapi.animate('.waapi.square', {
    x: '17rem',
    rotate: 180,
    loop: 3,
    alternate: true,
});

// JS Animation

const data = { x: '0rem', rotate: '0deg' }
const $log = document.querySelector('code');

anime.animate(data, {
    x: 17,
    rotate: 180,
    loop: 3,
    alternate: true,
    onRender: () => $log.innerHTML = JSON.stringify(data)
});