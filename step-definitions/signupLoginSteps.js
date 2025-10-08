const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const RegisterPage = require('../pages/RegisterPage');
const AccountPage = require('../pages/AccountPage');

setDefaultTimeout(90 * 1000);

let userData = {};

Given('the user navigates to the Parabank homepage', async function () {
  this.homePage = new HomePage(this.page); // page comes from Before hook
  await this.homePage.navigate();
});

When('the user registers with valid details', async function () {
  this.registerPage = new RegisterPage(this.page);
  await this.homePage.clickRegister();

  const ts = Date.now();
  userData = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    city: 'TestCity',
    state: 'CA',
    zip: '12345',
    phone: '9876543210',
    ssn: '111-22-3333',
    username: `user${ts}`,
    password: 'Password123!'
  };
  await this.registerPage.registerUser(userData);
   await this.homePage.logout();
    
});

When('the user logs in with the registered credentials', async function () {
  await this.homePage.goToLoginPage(); // now safe
  await this.homePage.login(userData.username, userData.password);
});

Then('the user should see their account balance displayed', async function () {
  const accountPage = new AccountPage(this.page);
  const balance = await accountPage.getBalance();

  console.log('===== Account balance (printed by test) =====');
  console.log(balance || '<no balance found>');
  console.log('=============================================');

  if (!balance) {
    throw new Error('Balance not displayed');
  }
});
