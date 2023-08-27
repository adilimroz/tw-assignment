class WalletHome {
    get crossButtonPushNotificationsAlert() {
        return $('//*[@resource-id="com.wallet.crypto.trustapp:id/action_cancel"]')
    }

    get walletName() {
        return $('//*[@resource-id="wallet_name"]');
    }

    async cancelPushNotification() {
        await this.crossButtonPushNotificationsAlert.click();
    }

}

module.exports = new WalletHome();