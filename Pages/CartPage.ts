import { Page } from "@playwright/test";
import UploadComponent from "./Component/Upload.component";

class CartPage {
  page: Page;
  constructor(page) {
    this.page = page;
  }
  uploadComponent() {
    return new UploadComponent(this.page);
  }
}
export default CartPage;
