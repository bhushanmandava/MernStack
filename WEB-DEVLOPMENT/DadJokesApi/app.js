//console.log("dad jokes");
const button = document.querySelector('button');
const list = document.querySelector('#jokes');

const linkingJokes = async () => {
    const getJoke = await getDadJokes();
    const newlist = document.createElement('li');
    newlist.textContent = getJoke;
    list.append(newlist);


}

const getDadJokes = async () => {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    const res = await axios.get(" https://icanhazdadjoke.com/", config)
    return res.data.joke
}
button.addEventListener('click', linkingJokes);