const tv = document.querySelector('#search');
const button = document.querySelector('button');
const pasingTv = async (e) => {
    e.preventDefault();
    const searchTerm = tv.value;
    await getTv(searchTerm);
}
const displayImages = (url) => {
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

}

const getTv = async (key) => {
    const config = {
        params: {
            q: key
        }
    }
    const req = await axios.get('https://api.tvmaze.com/singlesearch/shows', config);
    displayImages(req.data.image.medium);


}
button.addEventListener('click', pasingTv);