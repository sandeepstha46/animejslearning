
const $time = document.querySelector('.value');
const $count = document.querySelector('.count');

anime.createTimer({
    duration: 10000,
    loop: false,
    frameRate: 1,
    onUpdate: self => $time.innerHTML = self.currentTime,
    onLoop: self => $count.innerHTML = self.currentIteration
});