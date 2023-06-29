import { Selector, t } from 'testcafe';

class HeaderHelper {
    constructor () {
        this.accountTab=('#Account_Tab');
        this.contactsTab=('#Contact_Tab');
        this.searchBar = Selector ('#phSearchInput');
        this.searchButton = Selector('#phSearchButton');
        this.userNavLink = Selector('#userNav').nth(0);
        this.userNavLogoutOption = Selector('[title="Logout"]');
    }

    async clickAccountsTab() {
        await t.click(this.accountTab);
        console.log('clicking Accounts tab');
    }

    async clickContactsTab() {
        await t.click(this.contactsTab);
        console.log('clicking Contacts tab');
    }

    async clickSearchButton() {
        await t.click(this.searchButton);
        console.log('clicking search Button');
    }

    async clickUserNavLink() {
        await t.click(this.userNavLink);
        console.log('clicking user nav link');
    }

    async clickUserNavLogoutOption() {
        await t.click(this.userNavLogoutOption);
        console.log('clicking Logout');
    }

    async logoutAction() {
        this.clickUserNavLink();
        this.clickUserNavLogoutOption();
    }

    async searchAction(searchWord) {
        this.typeInSearchBar(searchWord);
        this.clickSearchButton();
    }

    async typeInSearchBar(searchWord) {
        await t.typeText(this.searchBar, searchWord, {replace:true, paste:true });
        console.log(`Typing in search bar: ${searchWord}`);
        await t.click(this.searchBar);
    }

}

export default new HeaderHelper();