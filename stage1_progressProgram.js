const readlineSync = require("readline-sync");
const {
    receiveFirstInput,
    receiveSecondInput,
} = require("./stage1_inputController.js");
const { viewBorderAndSquare, printLine } = require("./stage1_view.js");

function progressProgram() {
    printLine("사각형 그리기 프로그램");
    const firstInput = receiveFirstInput("첫 번째 점의 좌표를 입력하세요");
    const secondInput = receiveSecondInput(
        "두 번째 점의 좌표를 입력하세요",
        firstInput
    );
    viewBorderAndSquare(firstInput, secondInput);
    printLine("프로그램을 종료합니다.");
}

module.exports = { progressProgram };
