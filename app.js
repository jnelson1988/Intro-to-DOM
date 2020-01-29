/*let output = document.getElementById('output');
console.log(output);
output.innerText = 'Hello';
let foo = output.innerText;
console.log(foo);
output.style.color = 'red';
output.classList.add('foo');

let list = document.getElementById('list');
let items = ['item 1', 'item2', 'item3'];
for (const item of items) {
    list.innerHTML += `<li>${item}</li>`;
}
*/
let output = document.querySelectorAll('#output');
console.log(output);

// classlist recommended over classname (in book and very useful)

/*let game = document.querySelector('#game');
for (let i = 0; i < 9; i++) {
    let el = document.createElement('div');
    el.classList.add('foo');
    el.setAttribute('data-idx', i);
    game.appendChild(el);
}
*/