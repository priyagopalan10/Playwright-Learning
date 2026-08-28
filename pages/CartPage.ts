import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {
    }

    readonly checkoutButton = this.page.getByRole('button', {
        name: 'Checkout'
    });
    readonly bikeLight = this.page.getByText('Sauce Labs Bike Light');
async verifyBikeLightInCart() {
    await expect(this.bikeLight).toBeVisible();
}
    async goToCheckout() {
        await this.checkoutButton.click();
    }
    
}