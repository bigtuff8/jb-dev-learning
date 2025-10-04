import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',   // folder where your tests live
  retries: 1,           // re-run failing tests once
  reporter: [['list'], ['html']],   // CLI + HTML reports

  use: {
    screenshot: 'only-on-failure',   // take screenshot when a test fails
    video: 'retain-on-failure',      // record video only for failed tests
    trace: 'retain-on-failure',      // keep Playwright trace only on failures
    baseURL: 'http://localhost:3000', // optional: base URL if you test a web app
    headless: true                   // CI runs in headless mode
  },

  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox' } },
    { name: 'webkit',   use: { browserName: 'webkit' } },
  ],
});
