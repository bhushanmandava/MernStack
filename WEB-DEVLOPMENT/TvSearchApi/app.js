const tv = document.querySelector('#search');
const button = document.querySelector('button');

const pasingTv = async (e) => {
    e.preventDefault();
    const searchTerm = tv.value.trim();

    if (!searchTerm) {
        alert("Please enter a search term!");
        return;
    }

    await getTv(searchTerm);
};

const displayImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) { // Check if the show has an image
            const img = document.createElement('img');
            img.src = result.show.image.medium; // Access the image URL
            img.alt = result.show.name; // Add alt text for accessibility
            img.style.margin = "10px"; // Optional: Style images
            document.body.append(img);
        }
    }
};

const getTv = async (key) => {
    try {
        const config = {
            params: {
                q: key
            }
        };
        const req = await axios.get('https://api.tvmaze.com/search/shows', config);

        // Pass the array of shows to displayImages
        displayImages(req.data);
    } catch (err) {
        console.error("Error fetching TV shows:", err.message);
        alert("Something went wrong. Please try again.");
    }
};

button.addEventListener('click', pasingTv);
