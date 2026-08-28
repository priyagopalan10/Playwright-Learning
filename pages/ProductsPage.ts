import { Page, expect } from '@playwright/test';

export class ProductsPage {

    constructor(private page: Page) {
    }

    readonly bikeLight = this.page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bike Light' });

    readonly removeButton = this.bikeLight.getByRole('button', {
        name: 'Remove'
    });
    readonly cart = this.page.locator('.shopping_cart_link');

async goToCart() {
    await this.cart.click();
}

    async addBikeLight() {

        const addToCart = this.bikeLight.getByRole('button', {
            name: 'Add to cart'
        });

        await addToCart.click();

        await expect(this.removeButton).toBeVisible();
    }
    async removeBikeLight() {
        await this.removeButton.click();
    }
}