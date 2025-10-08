class AccountPage {
  constructor(page) {
    this.page = page;
    this.balance = page.locator('#accountTable tbody tr td:nth-child(2)');
  }
  async getBalance() {
    await this.page.waitForSelector('#accountTable', { timeout: 10000 });
    const balanceText = await this.balance.first().textContent();
    return balanceText ? balanceText.trim() : '';
  }
}
module.exports = AccountPage;
