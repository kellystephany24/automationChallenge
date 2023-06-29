import accountsHelper from '../src/web/common/AccountsHelper';
import accountsPage from '../src/web/pages/AccountsPage';
import contactsHelper from '../src/web/common/ContactsHelper';
import contactsPage from '../src/web/pages/ContactsPage';
import headerHelper  from '../src/web/common/HeaderHelper';
import loginHelper  from '../src/web/common/LoginHelper';
import { URLS } from '../src/constants/EnvUrls';
import { USERS}  from '../src/constants/Users';
import { nanoid } from 'nanoid';





fixture ('Contact Page testing')
    .page (`${URLS.LOGINPAGE_URL}`)
    
test.meta({type: "regression", id: "TC-4"})
    ("As a user I should be able to create a contact and assign it to an account", async t => {
        const accountName = 'Account' + nanoid();
        const lastName = nanoid();
        await loginHelper.logInAction(USERS.SALESFORCE_ADMIN.EMAIL, USERS.SALESFORCE_ADMIN.PASSWORD);
        headerHelper.clickAccountsTab();
        accountsHelper.addNewAccountBasicInfoAction(accountName, '12345', "8482345566");
        headerHelper.clickAccountsTab();
        await t.expect(accountsPage.firstAccountInList.innerText).contains(accountName, 'Account not displayed, account was not created');
        headerHelper.clickContactsTab();
        contactsHelper.addNewContactBasicInfoAction('TestUser', lastName, accountName, '2345456756',  `${lastName}@test.com`);
        headerHelper.clickContactsTab();
        await t.expect(contactsPage.firstContactInList.innerText).contains(`${lastName}, TestUser`, 'Contact not displayed, contact was not created');
        await t.expect(contactsPage.firstContactInListAccount.innerText).contains(accountName, 'Account not displayed, account was not assigned');
    
}).skipJsErrors();
