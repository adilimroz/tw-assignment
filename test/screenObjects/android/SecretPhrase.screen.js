class SecretPhrase {
    get individualSeedWord() {
        return $$('//*[@resource-id="com.wallet.crypto.trustapp:id/value"]')
    }

    get verifySeedWord() {
        return (str) => {
            return $(`//*[@text="${str}"]`);
        };
    }

    get continueButton() {
        return $('//*[@resource-id="com.wallet.crypto.trustapp:id/action_verify"]')
    }

    get doneButton() {
        return $('//*[@resource-id="com.wallet.crypto.trustapp:id/action_done"]');
    }

    async copyAndVerifySeed() {
        const seedWords = [];

        const elements = await this.individualSeedWord; // Assuming it's async

        if (!elements || elements.length === 0) {
            console.error("No seed elements found");
            return;
        }
        
        // Store the seed strings in order
        for (const seedElement of elements) {
            if(seedElement){
                const seedWord = await seedElement.getText();
                seedWords.push(seedWord);
            } else {
                console.error("Seed element is undefined");
            }
        }
        await this.continueButton.click();
        // Click and verify the seed words in the next screen
        for (const seedWord of seedWords) {
            const verifyElement = this.verifySeedWord(seedWord);
            await verifyElement.click();
        }
        await this.doneButton.click();
    }
}

module.exports = new SecretPhrase();