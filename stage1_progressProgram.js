const readlineSync = require("readline-sync");
const {
    receiveFirstInput,
    receiveSecondInput,
} = require("./stage1_inputController.js");

function progressProgram() {
    const firstInput = receiveFirstInput("첫 번째 점의 좌표를 입력하세요");
    const secondInput = receiveSecondInput(
        "두 번째 점의 좌표를 입력하세요",
        firstInput
    );
    console.log(secondInput);
}

module.exports = { progressProgram };
