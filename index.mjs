/*jslint
    es6
*/

export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        return "¡Hola mundo!";
    }
    return "Hello " + name + "!";
}

export function makeGreeter(language = "Spanish") {
    if (language === "Spanish") {
        return (name = "mundo") => `¡Hola ${name}!`;
    }
    return (name = "world") => `Hello ${name}!`;
}
