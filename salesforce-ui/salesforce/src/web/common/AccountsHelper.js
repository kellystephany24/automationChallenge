import { Selector, t } from 'testcafe';
import accountsPage from '../pages/AccountsPage';


class AccountsHelper {
   
    async addNewAccountBasicInfoAction(accountName, accountNumber, accountPhone) {
        accountsPage.clickNewAccount();
        accountsPage.typeAccountName(accountName);
        accountsPage.typeAccountNumber(accountNumber);
        accountsPage.typeAccountPhone(accountPhone);
        accountsPage.clickSaveAccountButton();
    }
}

export default new AccountsHelper();