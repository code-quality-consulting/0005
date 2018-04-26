/*jslint
    es6
*/

export function makeGreeter(language = "") {
    if (language === "Spanish") {
        return (name = "mundo") => `¡Hola ${name}!`;
    }
    return (name = "world") => `Hello ${name}!`;
}
