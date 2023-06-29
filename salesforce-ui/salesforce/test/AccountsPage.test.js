import headerHelper  from '../src/web/common/HeaderHelper';
import loginHelper  from '../src/web/common/LoginHelper';
import { URLS } from '../src/constants/EnvUrls';
import { USERS}  from '../src/constants/Users';
import accountsHelper from '../src/web/common/AccountsHelper';
import accountsPage from '../src/web/pages/AccountsPage';
import { nanoid } from 'nanoid';



fixture ('Accounts testing')
    .page (`${URLS.LOGINPAGE_URL}`)
    
test.meta({type: "regression", id: "TC-4"})
    ("As a user I should be able to create an Account", async t => {
        const accountName = 'Account' + nanoid();
        await loginHelper.logInAction(USERS.SALESFORCE_ADMIN.EMAIL, USERS.SALESFORCE_ADMIN.PASSWORD);
        headerHelper.clickAccountsTab();
        accountsHelper.addNewAccountBasicInfoAction(accountName, '12345', "8482345566");
        headerHelper.clickAccountsTab();
        await t.expect(accountsPage.firstAccountInList.innerText).contains(accountName, 'Account not displayed, account was not created');
        // accountsPage.clickFirstAccountInList();
        // accountsPage.deleteAccountAction();
        // headerHelper.clickAccountsTab();
        // await t.expect(accountsPage.firstAccountInList.innerText).notContains('AccountAutomationTest', 'Account was not deleted');
    
}).skipJsErrors();

