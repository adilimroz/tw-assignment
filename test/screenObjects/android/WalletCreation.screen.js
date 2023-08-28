class WalletCreationScreen {
    get createNewWallet() {
        return $('//*[@text="I don’t have a wallet"]')
    }

    get navBarWallet() {
        return $('//*[@content-desc="Wallet"]')
    }

    get navBarSwap() {
        return $('//*[@content-desc="Swap"]');
    }

    get navBarDiscover() {
        return $('//*[@content-desc="Discover"]');
    }

    get navBarBrowser() {
        return $('//*[@content-desc="Browser"]');
    }

    get navBarSettings() {
        return $('//*[@content-desc="Settings"]');
    }

    async clickCreateNewWallet() {
        await this.createNewWallet.click();
        
    }
}

module.exports = new WalletCreationScreen();