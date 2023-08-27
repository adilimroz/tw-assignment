const testData = require('../../data/testdata.json')

const WelcomeScreen = require('../../screenObjects/android/Welcome.screen')
const WalletCreationScreen = require('../../screenObjects/android/WalletCreation.screen')
const Passcode = require('../../screenObjects/android/Passcode.screen')
const SecretBackup = require('../../screenObjects/android/SecretBackup.screen')
const Consent = require('../../screenObjects/android/Consent.screen')
const SecretPhrase = require('../../screenObjects/android/SecretPhrase.screen')
const Stories = require('../../screenObjects/android/Stories.screen')
const WalletHome = require('../../screenObjects/android/WalletHome.screen')

describe('End to end tests.', () => {
    it('End to end successfull user flow.', async() => {
        const passcode = testData.passcode;
        const walletName = testData.defaultWalletName;

        await WelcomeScreen.getStarted();
        await WalletCreationScreen.clickCreateNewWallet();
        await Passcode.enterAndConfirmPasscode(passcode, passcode);
        await SecretBackup.backUpManually();
        await Consent.giveConsent();
        await SecretPhrase.copyAndVerifySeed();
        await Stories.closeStories();
        await WalletHome.cancelPushNotification();
        await expect(WalletHome.walletName).toHaveText(walletName);
    })
})