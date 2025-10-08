class HomePage {
  constructor(page) {
    this.page = page;
    this.registerLink = page.locator('a[href*="register.htm"]');
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[value="Log In"]');
     this.logoutButton = page.locator('a[href="logout.htm"]').filter({
      hasText: /Log Out|Logout/
    });
  }

  // Navigate to homepage/login page
  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC', {
      waitUntil: 'networkidle',
      timeout: 60000
    });
  }

  // Click on Register link
  async clickRegister() {
    await this.registerLink.waitFor({ state: 'visible', timeout: 60000 });
    await this.registerLink.click();
  }

  // Go to login page safely after registration
  async goToLoginPage() {
    // Directly navigate to login URL to avoid ambiguous links
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC', {
      waitUntil: 'networkidle',
      timeout: 60000
    });

    // Wait for username input to be visible
    await this.usernameInput.waitFor({ state: 'visible', timeout: 60000 });
  }

  // Login using username/password
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: 60000 }),
      this.loginButton.click()
    ]);
  }

  async logout() {
    if (await this.logoutButton.isVisible({ timeout: 5000 })) {
      await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: 60000 }),
        this.logoutButton.click()
      ]);
      console.log('✅ User logged out successfully');
    } else {
      console.log('⚠️ Logout link not visible, skipping logout');
    }
  }
}


module.exports = HomePage;
