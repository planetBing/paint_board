function printLine(text) {
    console.log(text);
}

function repeatPrint(string, repetitionNum) {
    for (let i = 1; i <= repetitionNum; i++) {
        printLine(string);
    }
}

const upDownBorderStirng = "-".repeat(80);
const sideBorderString = "|" + " ".repeat(78) + "|";

function viewBorderAndSquare(firstInput, secondInput) {
    const [X1, Y1] = firstInput;
    const [X2, Y2] = secondInput;
    printLine(upDownBorderStirng);
    repeatPrint(sideBorderString, Y1 - 1);
    const squareString = splitSquareIntoString(X1, X2);
    repeatPrint(squareString, Y2 - Y1);
    repeatPrint(sideBorderString, 28 - Y2 + 1);
    printLine(upDownBorderStirng);
}

function splitSquareIntoString(X1, X2) {
    return (
        "|" +
        " ".repeat(X1 - 1) +
        "*".repeat(X2 - X1) +
        " ".repeat(78 - X2 + 1) +
        "|"
    );
}

module.exports = { viewBorderAndSquare, printLine };
