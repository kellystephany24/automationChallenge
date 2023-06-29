import loginPage from '../pages/LoginPage';
import { Selector, t } from 'testcafe';



class LoginHelper {

    async logInAction(username, password){
        loginPage.typeUsername(username);
        loginPage.typePassword(password);
        loginPage.clickLogin();
    }
}

export default new LoginHelper();