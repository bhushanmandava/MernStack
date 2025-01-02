// // const btn = document.quectorAll('button');
// const h1 = document.querySelector('h1');
// btn.addEventListener('click', function () {
//     // document.body.style.backgroundColor = 'olive'
//     const newColor = makeRandom();
//     document.body.style.backgroundColor = newColor;
// });
function makeRandom() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const btns = document.querySelectorAll('button');

for (let i of btns) {
    i.addEventListener('click', () => {
        i.style.background = makeRandom(); // Changes the background color of the clicked button
    });
}
