import { Selector, t } from 'testcafe';
import { URLS } from '../../constants/EnvUrls';


class AccountsPage {
    constructor () {
        this.accountNameInput = Selector('#acc2');
        this.accountNumberInput = Selector('#acc5');
        this.accountPhoneInput = Selector('#acc10');
        this.deleteAccountButton = Selector('[name="delete"]');
        this.firstAccountInList = Selector('.dataCell > a').nth(0);
        this.newAccountButton = Selector('[name="new"]');
        this.saveAccountButton = Selector('[name="save"]');
    }


    async clickFirstAccountInList() {
        await t.click(this.firstAccountInList);
        console.log('clicking first account in List');
    }

    async clickNewAccount() {
        await t.click(this.newAccountButton);
        console.log('clicking new account');
    }

    async clickSaveAccountButton() {
        await t.click(this.saveAccountButton);
        console.log('clicking save account button');
    }

    async deleteAccountAction() {
        await t.setNativeDialogHandler(() =>true)
        await t.click(this.deleteAccountButton);
        }    

    async typeAccountName(accountName) {
        await t.typeText(this.accountNameInput, accountName);
        console.log(`Typing account name: ${accountName}`);
    }

    async typeAccountNumber(accountNumber) {
        await t.typeText(this.accountNumberInput, accountNumber);
        console.log(`Typing account number: ${accountNumber}`);
    }

    async typeAccountPhone(accountPhone) {
        await t.typeText(this.accountPhoneInput, accountPhone);
        console.log(`Typing account phone: ${accountPhone}`);
    }
}

export default new AccountsPage();