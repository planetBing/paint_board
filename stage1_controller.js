const readlineSync = require("readline-sync");

function receiveInput() {
    return readlineSync.question("두 숫자를 입력");
}

// class InputController {
//     constructor() {
//         this.receiveInput = readlineSync.question("두 숫자를 입력");
//     }
// }

module.exports = { receiveInput };
