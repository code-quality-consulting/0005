/*jslint
    es6
*/
const worldInDifferentLanguages = {
    "English": "world",
    "Spanish": "mundo"
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Spanish": "¡Hola"
};

export function makeGreeter(language = "") {
    return (name = worldInDifferentLanguages[language]) => `${helloInDifferentLanguages[language]} ${name}!`;
}
