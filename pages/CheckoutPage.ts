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

    async completeCustomerDetails(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }

    async verifyCheckoutPage() {
        await expect(this.checkoutOverview).toBeVisible();
    }
}