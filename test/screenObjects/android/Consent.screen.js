class Consent {
    get consentOne() {
        return $('//*[@resource-id="com.wallet.crypto.trustapp:id/concent1"]')
    }

    get consentTwo() {
        return $('//*[@resource-id="com.wallet.crypto.trustapp:id/concent2"]')
    }

    get consentThree() {
        return $('//*[@resource-id="com.wallet.crypto.trustapp:id/concent3"]')
    }

    get continueButton() {
        return $('//*[@resource-id="com.wallet.crypto.trustapp:id/next"]');
    }

    async giveConsent() {
        await this.consentOne.click();
        await this.consentTwo.click();
        await this.consentThree.click();
        await this.continueButton.click();
    }

}

module.exports = new Consent();