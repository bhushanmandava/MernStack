const container = document.querySelector('#container'); // Corrected `documnet` to `document`
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {
    // const div = document.createElement('div'); // Create a div for each Pokémon
    const div = document.createElement('div');
    div.classList.add('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const image = document.createElement('img'); // Create an img element
    image.setAttribute('src', `${baseURL}${i}.png`); // Corrected string interpolation
    // container.appendChild(label);
    // container.appendChild(image); // Append the image to the div
    // container.appendChild(div); // Append the div to the container
    div.appendChild(image);
    div.appendChild(label);
    container.appendChild(div);
}
