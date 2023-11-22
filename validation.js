class InputValidation {
    constructor(InputController) {
        const input = InputController.currentInput;
        this.matchingPattern = InputValidation.matchPattern(input);
    }

    static matchPattern(input) {
        console.log(input);
        const pattern = /^\d\,\s?\d/;
        if (input.match(pattern)) {
            return "okay";
        } else {
            return "no!";
        }
    }
}

module.exports = { InputValidation };
