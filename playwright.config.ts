import { Project, defineConfig, devices } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000/',
    timeout: 10 * 1000, // < timeout for vite server to start
    reuseExistingServer: !process.env.CI,
  },

  testDir: ".",
  timeout: 10000,
  fullyParallel: process.env.CI ? false : true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: "playwright-report" }],
  ],
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'default',
      use: {
        ...devices['Desktop Chrome'],
      }
    }
  ],
});
