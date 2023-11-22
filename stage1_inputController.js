const readlineSync = require("readline-sync");

function receiveFirstInput(requestMessage) {
    while (true) {
        const currentInput = readlineSync.question(requestMessage);
        if (validateCurrentInput(currentInput)) {
            return currentInput.split(",").map((e) => Number(e));
        }
    }
}

function receiveSecondInput(requestMessage, firstInput) {
    while (true) {
        const currentInput = readlineSync.question(requestMessage);
        if (validateCurrentInput(currentInput)) {
            const [X1, Y1] = firstInput;
            const [X2, Y2] = currentInput.split(",").map((e) => Number(e));
            if (X2 > X1 && Y2 > Y1) {
                return [X2, Y2];
            } else {
                console.log("첫 번째 점의 좌표보다 숫자를 크게 입력하세요.");
            }
        }
    }
}

function validateCurrentInput(currentInput) {
    const pattern = /^\d+\,\s?\d+$/;
    if (currentInput.match(pattern)) {
        return checkValuesInRange(currentInput);
    } else {
        console.log("잘못 입력하셨습니다.");
    }
}

function checkValuesInRange(currentInput) {
    const [X, Y] = currentInput.split(",").map((e) => Number(e));
    if (X >= 1 && X <= 78 && Y >= 1 && Y <= 28) {
        return true;
    } else {
        console.log("범위 내의 숫자를 입력하세요. (78이하, 28이하)");
    }
}

module.exports = { receiveFirstInput, receiveSecondInput };
