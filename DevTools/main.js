const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
// Interpolated
console.log('Hello I am a %s string!', "yoyo");
// Styled

console.log('%c I am some great Text', 'font-size: 50px; background: red');
// warning!
// console.warn('ohh noo');
// Error :|
// console.error('shit!');
// Info
console.info('info info');
// Testing
// const p = document.querySelector('#p');
// console.assert(p.classList.contains('ouch'), 'That is wrong!');
// clearing
// Viewing DOM Elements
// console.dir(p);

// Grouping together

// counting
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });