import { Selector, t } from 'testcafe';


class LoginPage {
    constructor () {
        this.loginButton = Selector("#Login");
        this.passwordInput = Selector('#password');
        this.usernameInput = Selector('#username');
    }
    
    async clickLogin() {
        await t.click(this.loginButton);

    }

    async typePassword(password) {
        await t.typeText(this.passwordInput, password, {replace:true, paste:true });
        console.log('Typing password');
    }

    async typeUsername(username) {
        await t.typeText(this.usernameInput, username, {replace:true, paste:true });
        console.log(`Typing username: ${username}`);
    }
}

export default new LoginPage();