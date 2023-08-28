const testData = require('../../data/testdata.json')

const WelcomeScreen = require('../../screenObjects/android/Welcome.screen')
const WalletCreationScreen = require('../../screenObjects/android/WalletCreation.screen')
const Passcode = require('../../screenObjects/android/Passcode.screen')
const SecretBackup = require('../../screenObjects/android/SecretBackup.screen')
const Consent = require('../../screenObjects/android/Consent.screen')
const SecretPhrase = require('../../screenObjects/android/SecretPhrase.screen')

describe('Regression tests.', () => {
    beforeEach(async () => {
        await driver.launchApp();
    });

    it('Validate nav bar options in wallet creation screen.', async() => {
        await WelcomeScreen.getStarted();
        
        await expect(WalletCreationScreen.navBarWallet).toExist();
        await expect(WalletCreationScreen.navBarSwap).toExist();
        await expect(WalletCreationScreen.navBarDiscover).toExist();
        await expect(WalletCreationScreen.navBarDiscover).toExist();
        await expect(WalletCreationScreen.navBarSettings).toExist();
    });

    it('Validate error when passcodes do not match in passcode screen.', async() => {
        const passcode = testData.passcode;
        const wrongPasscode = testData.mismatchedPasscode;

        await WelcomeScreen.getStarted();
        await WalletCreationScreen.clickCreateNewWallet();
        await Passcode.enterAndConfirmPasscode(passcode, wrongPasscode)
        
        await expect(Passcode.passcodeMismatchError).toBeDisplayed();
    });

    it("Validate error when seed words don't match.", async() => {
        const passcode = testData.passcode;

        await WelcomeScreen.getStarted();
        await WalletCreationScreen.clickCreateNewWallet();
        await Passcode.enterAndConfirmPasscode(passcode, passcode);
        await SecretBackup.backUpManually();
        await Consent.giveConsent();
        await SecretPhrase.copyAndInputIncorrectSeed();
        await expect(SecretPhrase.invalidOrderError).toHaveText("Invalid order. Try again!")
    })
    
    afterEach(async () => {
        await driver.closeApp();
    });
});