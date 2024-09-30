// inject required js file
function addJS(path) {
    var js = document.createElement('script');
    js.src = path;
    document.head.appendChild(js);
}

// choose random item
function choose() {
    return arguments[irandom(arguments.length - 1)];
}

// generate random int 
function irandom(max) {
    return Math.floor(Math.random() * (max + 1));
}

// generate random int in range
function irandom_range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate random int in range
function irandom_range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}