import { Page } from '@playwright/test';

export class LoginPage {

    readonly username;
    readonly password;
    readonly loginButton;

    constructor(private page: Page) {

        this.username = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });

    }

    async login() {
        await this.page.goto('https://www.saucedemo.com');

        await this.username.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }
}