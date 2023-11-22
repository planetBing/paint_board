const readlineSync = require("readline-sync");
const { InputValidation } = require("./validation.js");
const { InputController } = require("./controller.js");

function init() {
    const firstInput = new InputController();
    // const input = readlineSync.question("두 숫자를 입력 ");
    const validation = new InputValidation(firstInput);

    console.log(validation.matchingPattern);
}

init();
