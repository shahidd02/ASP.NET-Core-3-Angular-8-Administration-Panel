import { browser, by, element } from "protractor";

export class JpProjectWebAppPage {
    navigateTo() {
        return browser.get("http://localhost:4200/");
    }

    getUrl() {
        return browser.getCurrentUrl();
    }

    getButtonText() {
        return element(by.css(".login-container .card-body .mt-3")).getText();
    }
}
