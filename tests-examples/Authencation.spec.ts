import { test, expect } from "@playwright/test";
test.describe("authentications tests", () => {
    // .serial
  //   let page: Page;
  //   test.beforeAll(async ({ browser }) => {
  //     page = await browser.newPage();
  //     await page.goto("https://practice.sdetunicorns.com/my-account/orders/");
  //     await page.locator("#username").fill("practiceuser1");
  //     await page.locator("#password").fill("PracticePass1!");
  //     await page.locator('[value="Log in"]').click();
  //     await expect(page.locator('li a[href*="customer-logout"]')).toBeVisible();
  //   });

  test("test for access order", async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/my-account/");
    await page.locator(`li a[href *='orders']`).click();
    await expect(page).toHaveURL(/.*orders/);
  });
  test("test for access order two", async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/my-account/");
    await page.locator(`li a[href *='orders']`).click();
    await expect(page).toHaveURL(/.*orders/);
  });
});
