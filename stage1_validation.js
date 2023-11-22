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
        console.log("범위 내의 숫자를 입력하세요.");
    }
}

module.exports = { validateCurrentInput };
