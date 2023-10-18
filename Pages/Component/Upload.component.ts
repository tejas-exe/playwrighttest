import { Locator, Page } from "@playwright/test";

class UploadComponent {
  page: Page;
  uploadButton: Locator;
  succeedMessage: Locator;
  uploadInput: string;
  constructor(page) {
    this.page = page;
    this.uploadInput = "upfile_1";
    this.uploadButton = page.locator("#upload_1");
    this.succeedMessage = page.locator("#wfu_messageblock_header_1_label_1");
    this.uploadInputID = "input#upfile_1";
  }
  async uploadFile(filePath: string) {
    await this.page.setInputFiles(this.uploadInputID, filePath);
    await this.uploadButton.click();
  }
}
export default UploadComponent;
