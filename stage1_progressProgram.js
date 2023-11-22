const { validateCurrentInput } = require("./stage1_validation.js");
const { receiveInput } = require("./stage1_controller.js");

function progressProgram() {
    while (true) {
        const firstInput = receiveInput();
        if (validateCurrentInput(firstInput)) break;
    }
}

module.exports = { progressProgram };
