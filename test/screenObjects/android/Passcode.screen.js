class Passcode {
    get numericals() {
        return (number) => {
            return $(`//*[@text="${number}"]`);
        };
    }

    async enterPasscode(str) {
        if (str === null || str === '') {
            throw new Error('Passcode cannot be null or empty');
        }

        if (typeof str !== 'string') {
            throw new Error('Passcode must be a string');
        }

        for (const digit of str) {
            await this.numericals(digit).click();
        }
    }

    async enterAndConfirmPasscode(passcode, confirmationPasscode) {
        await this.enterPasscode(passcode);
        await this.enterPasscode(confirmationPasscode);
    }
}

module.exports = new Passcode();