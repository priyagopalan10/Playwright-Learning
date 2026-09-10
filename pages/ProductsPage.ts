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
    readonly cartBadge = this.page.locator('[data-test="shopping-cart-badge"]');

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

    async addProduct(productName) {

        const product = this.page.locator('.inventory_item')
            .filter({ hasText: productName });

        const addToCart = product.getByRole('button', {
            name: 'Add to cart'
        });

        await addToCart.click();
    }
async verifyProductVisible(productName) {
    const product = this.page.locator('.inventory_item').filter ({hasText : productName});
    await expect(product).toBeVisible();
}

async verifyCartCount(count) {
    await expect(this.cartBadge).toHaveText(count.toString());
}
async verifyCartNotEmpty() {
    await expect(this.cartBadge).toBeVisible();
}
async verifyCartEmpty() {
    await expect(this.cartBadge).toBeHidden();
}
}
