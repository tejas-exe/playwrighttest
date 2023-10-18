import { test, expect, type Page } from "@playwright/test";
import CartPage from "../Pages/CartPage";
const path = require("path");
test.describe("UploadFile", () => {
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/cart/");
  });

  let FileName = ["largeFile.jpg", "small.png"];
  for (const name of FileName) {
    test(`Check for ${name} upload file`, async ({ page }) => {
      cartPage = new CartPage(page);

      const FilePath = path.join(__dirname, `../data/${name}`);
      page.evaluate(() => {
        const documentButton = document.getElementById("#input#upfile_1");
        if (documentButton) {
          documentButton.className = "";
        }
      });
      // await page.pause();
      cartPage.uploadComponent().uploadFile(FilePath);
      // Wrong way
      // await page.waitForTimeout(15000);

      //da right way
      // await page
      //   .locator("#wfu_messageblock_header_1_label_1")
      //   .waitFor({ state: "visible" ,timeout:10000 });
      //    setTimeout(async() => {
      await expect(cartPage.uploadComponent().succeedMessage).toContainText(
        "uploaded successfully",
        { timeout: 30000 }
      );
      //}, 1000);
    });
  }
  // test("Check for upload file ", async ({ page }) => {
  //   cartPage = new CartPage(page);

  //   const FilePath = path.join(__dirname, "../data/largeFile.jpg");
  //   page.evaluate(() => {
  //     const documentButton = document.getElementById("#input#upfile_1");
  //     if (documentButton) {
  //       documentButton.className = "";
  //     }
  //   });
  //   // await page.pause();
  //   cartPage.uploadComponent().uploadFile(FilePath);
  //   // Wrong way
  //   // await page.waitForTimeout(15000);

  //   //da right way
  //   // await page
  //   //   .locator("#wfu_messageblock_header_1_label_1")
  //   //   .waitFor({ state: "visible" ,timeout:10000 });
  //   //    setTimeout(async() => {
  //   await expect(cartPage.uploadComponent().succeedMessage).toContainText(
  //     "uploaded successfully",
  //     { timeout: 20000 }
  //   );
  //   //}, 1000);
  // });
});
