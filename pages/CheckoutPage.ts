import { Page, expect } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {
    }

    readonly firstName = this.page.getByRole('textbox', {
        name: 'First Name'
    });

    readonly lastName = this.page.getByRole('textbox', {
        name: 'Last Name'
    });
    readonly postalCode = this.page.getByRole('textbox', {
    name: 'Postal Code'
});
    readonly continueButton = this.page.getByRole('button', {
        name: 'Continue'
    });
    readonly checkoutOverview = this.page.getByText('Checkout: Overview');

    async completeCustomerDetails() {
        await this.firstName.fill('Priya');
        await this.lastName.fill('Gopalan');
        await this.postalCode.fill('600042');
        await this.continueButton.click();
    }
    async verifyCheckoutPage() {
    await expect(this.checkoutOverview).toBeVisible();
}
}