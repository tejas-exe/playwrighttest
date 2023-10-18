import { test, expect } from "@playwright/test";

test.describe("Account Page", () => {
  test.use({ storageState: "notLoggedInState.json" });
  test("Verify login and register is visible", async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/my-account/");
    await expect(page.locator('form[class*="login"]')).toBeVisible();
    await expect(page.locator('form[class*="register"]')).toBeVisible();
  });
});
