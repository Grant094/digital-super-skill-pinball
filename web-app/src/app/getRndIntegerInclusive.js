// copied from https://www.w3schools.com/js/js_random.asp
export default function getRndIntegerInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}