import { Selector, t } from 'testcafe';

class ContactsPage {
    constructor () {
        this.accountNameInput = Selector('#con4');
        this.contactEmailInput = Selector('#con15');
        this.contactPhoneInput = Selector('#con10');
        this.deleteAccountButton = Selector('[name="delete"]');
        this.firstContactInList = Selector('.dataCell > a').nth(0);
        this.firstContactInListAccount = Selector('.dataCell > a').nth(1);
        this.firstNameInput = Selector('#name_firstcon2');
        this.lastNameInput = Selector('#name_lastcon2');
        this.newContactButton = Selector('[name="new"]');
        this.saveContactButton = Selector('[name="save"]');
    }


    async clickNewContactButton() {
        await t.click(this.newContactButton);
        console.log('clicking new contact button');
    }

    async clickSaveContactButton() {
        await t.click(this.saveContactButton);
        console.log('clicking save contact button');
    }
 
    async typeAccountName(accountName) {
        await t.typeText(this.accountNameInput, accountName);
        console.log(`Typing account name: ${accountName}`);
    }

    async typeContactEmail(contactEmail) {
        await t.typeText(this.contactEmailInput, contactEmail);
        console.log(`Typing contact email: ${contactEmail}`);
    }

    async typeContactPhone(contactPhone) {
        await t.typeText(this.contactPhoneInput, contactPhone);
        console.log(`Typing contact phone: ${contactPhone}`);
    }

    async typeFirstName(firstName) {
        await t.typeText(this.firstNameInput, firstName);
        console.log(`Typing first name: ${firstName}`);
    }

    async typeLastName(lastName) {
        await t.typeText(this.lastNameInput, lastName);
        console.log(`Typing last name: ${lastName}`);
    }
}

export default new ContactsPage();