// register.spec.js
const { test, expect } = require('@playwright/test');

function generateEmail() {
  const timestamp = Date.now();
  return `user${timestamp}@mail.com`;
}

test('Create new user account with resilient locators', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

  await page.getByLabel('First Name').fill('Maria');
  await page.getByLabel('Last Name').fill('Costa');
  await page.getByLabel('E-Mail').fill(generateEmail());
  await page.getByLabel('Telephone').fill('+351123456789');
  await page.getByLabel('Password', { exact: true }).fill('987654321');
  await page.getByLabel('Password Confirm', { exact: true }).fill('987654321');

  await page.getByText('Yes').click(); // Newsletter opt-in
  await page.getByText('I have read and agree').click(); // Privacy Policy

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page).toHaveTitle('Your Account Has Been Created!');
});

test('Create new user account with strategies for handling dynamic components', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Register Account');

  await page.getByLabel('First Name').fill('Maria');
  await page.getByLabel('Last Name').fill('Costa');
  await page.getByLabel('E-Mail').fill(generateEmail());
  await page.getByLabel('Telephone').fill('+351123456789');
  await page.getByLabel('Password', { exact: true }).waitFor({ state: 'visible' });
  await page.getByLabel('Password', { exact: true }).fill('987654321');

  await page.getByLabel('Password Confirm', { exact: true }).fill('987654321');

  await page.getByText('Yes').click(); // Newsletter opt-in
  await page.getByText('I have read and agree').click(); // Privacy Policy

  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForURL(/.*account\/success/);


  await expect(page).toHaveTitle('Your Account Has Been Created!');
});

