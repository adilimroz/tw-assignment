class Stories {
    get crossButton() {
        return $('//*[@class="android.widget.Button"][1]');
    }

    async closeStories() {
        await this.crossButton.waitForDisplayed({ timeout: 2000 })
        await this.crossButton.click();
    }
}

module.exports = new Stories();