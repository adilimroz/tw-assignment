class WelcomeScreen {
    get getStartedButton() {
        return $('//*[@resource-id="com.wallet.crypto.trustapp:id/new_account_action"]')
    }

    async getStarted() {
        await this.getStartedButton.click();
    }
}

module.exports = new WelcomeScreen();