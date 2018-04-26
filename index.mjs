/*jslint
    es6
*/

export function makeGreeter(language = "Spanish") {
    if (language === "Spanish") {
        return (name = "mundo") => `¡Hola ${name}!`;
    }
    return (name = "world") => `Hello ${name}!`;
}
