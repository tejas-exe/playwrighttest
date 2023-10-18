import { test, expect, type Page } from "@playwright/test";
import HomePage from "../Pages/HomePage";
import { faker } from "@faker-js/faker";
test.describe("Home", () => {
  let homePage;
  test("Open Home page and verify title", async ({ page }) => {
    homePage = new HomePage(page);
    // open url
    await homePage.navigateHomePage();
    // verify title
    await expect(page).toHaveTitle(
      "Practice Test Automation | Learn Selenium WebDriver"
    );
  });

  test("about us page", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/courses/");
    await expect(page).toHaveTitle("Courses | Practice Test Automation");
  });

  test("Read more button using css selector", async ({ page }) => {
    homePage = new HomePage(page);
    // Read mORE
    await page.goto("https://dxc.com/in/en");
    await homePage.ReadMore.click();
    await expect(page).toHaveURL(
      "https://dxc.com/in/en/insights/customer-stories/nissan-flexible-modern-workplace-boosts-employee-productivity-satisfaction"
    );
  });

  test("text selector", async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto("https://wise.com/");
    const text = await page.locator('text ="Save when you send worldwide"');
    await expect(text).toBeVisible();
  });
  //text selector and css selector
  test("css and text selector together", async ({ page }) => {
    await page.goto("https://dxc.com/in/en");
    // const selector = page.locator("#contact-us-link >> text=Contact Us");
    const selector = page.locator('#contact-us-link:has-text("Contact Us")');
    await expect(selector).toBeEnabled();
  });

  // finding by xpath
  //*[@id="mega-menu-wrapper"]//*[@id="search-button"]
  test("verify text fot all links", async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto("https://practice.sdetunicorns.com/");

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    // let promises = expectedLinks.slice(2, 4).map(async (el) => {
    //   console.log("===>", expectedLinks.indexOf(el));

    //   const selector = page
    //     .locator('#zak-primary-menu li[id*="menu"]')
    //     .nth(expectedLinks.indexOf(el) * 1);
    //   expect(await selector.textContent()).toEqual(el);
    // });

    // await Promise.all(promises);
    expect(await homePage.getNavLinkTest()).toEqual(expectedLinks);
  });

  test("check if the text submission gives an success message", async ({
    page,
  }) => {
    await page.goto("https://practice.sdetunicorns.com/contact/");

    await page
      .locator("#evf-277-field_ys0GeZISRs-1")
      .fill(faker.name.firstName());
    await page
      .locator("#evf-277-field_LbH5NxasXM-2")
      .fill(faker.internet.email());
    await page
      .locator("#evf-277-field_66FR384cge-3")
      .fill(faker.phone.number());
    await page.locator("#evf-277-field_yhGx3FOwr2-4").fill(faker.lorem.paragraphs(2));
    page.locator("#evf-submit-277").click();

    const greenLine = page.locator(
      '//*[@class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]'
    );

    await expect(greenLine).toBeVisible();
  });
  // test("check the length of all string and array", async ({ page }) => {
  //   await page.goto("https://practice.sdetunicorns.com/blog/");
  //   const pageLocater = page.locator("#recent-posts-3 ul li");
  //   for (const el of await pageLocater.elementHandles()) {
  //     expect((await el.textContent()).trim().length).toBeGreaterThan(5);
  //   }
  //   expect(await pageLocater.count()).toEqual(5);
  // });
});
