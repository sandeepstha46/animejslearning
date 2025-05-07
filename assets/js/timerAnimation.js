
const $time = document.querySelector('.value');
const $count = document.querySelector('.count');

anime.createTimer({
    duration: 1000,
    loop: true,
    frameRate: 30,
    onUpdate: self => $time.innerHTML = self.currentTime,
    onLoop: self => $count.innerHTML = self.currentIteration
});