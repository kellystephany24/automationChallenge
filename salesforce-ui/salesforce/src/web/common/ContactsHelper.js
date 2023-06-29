import { Selector, t } from 'testcafe';
import contactsPage from '../pages/ContactsPage';


class AccountsHelper {
   
    async addNewContactBasicInfoAction(firstName, lastName, accountName, contactPhone, contactEmail) {
        contactsPage.clickNewContactButton();
        contactsPage.typeFirstName(firstName);
        contactsPage.typeLastName(lastName);
        contactsPage.typeAccountName(accountName);
        contactsPage.typeContactPhone(contactPhone);
        contactsPage.typeContactEmail(contactEmail);
        contactsPage.clickSaveContactButton();
    }
}

export default new AccountsHelper();