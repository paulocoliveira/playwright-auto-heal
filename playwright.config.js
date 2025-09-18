import { defineConfig, devices } from '@playwright/test';

const LT_USERNAME = process.env.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;

const ltCapabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Playwright Auto Heal Build',
    name: 'Playwright Auto Heal Test',
    autoHeal: true,
    user: LT_USERNAME,
    accessKey: LT_ACCESS_KEY,
  }
};

const ltWsEndpoint = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(ltCapabilities))}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'LambdaTest-Chrome-AutoHeal',
      use: {
        connectOptions: {
          wsEndpoint: ltWsEndpoint,
        },
      },
    },
  ],
});
