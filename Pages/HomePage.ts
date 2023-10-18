import { Locator, Page } from "@playwright/test";

class HomePage {
  page: Page;
  ReadMore: Locator;
  wiseText: Locator;
  testName: Locator;
  testEmail: Locator;
  testNumber: Locator;
  testMessage: Locator;
  listItems: Locator;
  NavLinks: Locator;
  constructor(page) {
    this.page = page;
    this.ReadMore = page.locator("#cta-68dd06a946");
    this.wiseText = page.locator('text ="Save when you send worldwide"');
    this.testName = page.locator("#evf-277-field_ys0GeZISRs-1");
    this.testEmail = page.locator("#evf-277-field_LbH5NxasXM-2");
    this.testNumber = page.locator("#evf-277-field_66FR384cge-3");
    this.testMessage = page.locator("#evf-277-field_yhGx3FOwr2-4");
    this.listItems = page.locator("#recent-posts-3 ul li");
    this.NavLinks = page.locator('#zak-primary-menu li[id*="menu"]');
  }
  async navigateHomePage() {
    await this.page.goto("https://practicetestautomation.com/");
  }
  async getNavLinkTest() {
    return this.NavLinks.allTextContents();
  }
}
export default HomePage;
