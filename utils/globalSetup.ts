import { FullConfig, chromium } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://practice.sdetunicorns.com/my-account/");
  await page.context().storageState({ path: "notLoggedInState.json" });
  //   login
  await page.locator("#username").fill("practiceuser1");
  await page.locator("#password").fill("PracticePass1!");
  await page.locator('[value="Log in"]').click();
  //   await expect(page.locator('li a[href*="customer-logout"]')).toBeVisible();

  // save login state
  await page.context().storageState({ path: "loggedState.json" });
//   close
  await browser.close();
}

export default globalSetup;
