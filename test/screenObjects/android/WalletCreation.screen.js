class WalletCreationScreen {
    get createNewWallet() {
        return $('//*[@text="I don’t have a wallet"]')
    }

    async clickCreateNewWallet() {
        await this.createNewWallet.click();
        
    }
}

module.exports = new WalletCreationScreen();