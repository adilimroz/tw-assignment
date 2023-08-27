class SecretBackup {
    get backupManually() {
        return $('//*[@text="Back up manually"]');
    }

    async backUpManually() {
        await this.backupManually.click();
    }


}

module.exports = new SecretBackup();