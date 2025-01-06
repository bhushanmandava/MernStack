const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; // Corrected "backgroundColor"
            resolve();
        }, delay);
    });
};

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('black', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('orange', 1000));
