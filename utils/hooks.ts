import { test as base } from '@playwright/test';
import { TestConfig } from '../utils/test.config'

export const test = base.extend({
  // you can add fixtures here if needed
});

test.beforeEach(async ({ page }) => {
  console.log('Running before each test');



  let config: TestConfig = new TestConfig();
  await page.goto(config.appUrl);
});

test.afterEach(async ({ page }) => {
  console.log('Running after each test');
  await page.close()
});

export const expect = test.expect;