const readlineSync = require("readline-sync");

class InputController {
    constructor() {
        this.currentInput = readlineSync.question("두 숫자를 입력");
    }
}

module.exports = { InputController };
