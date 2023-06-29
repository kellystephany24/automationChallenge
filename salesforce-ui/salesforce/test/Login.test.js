import headerHelper  from '../src/web/common/HeaderHelper';
import loginHelper  from '../src/web/common/LoginHelper';
import { URLS } from '../src/constants/EnvUrls';
import { USERS}  from '../src/constants/Users';
import LoginPage from '../src/web/pages/LoginPage';



fixture (`Login testing`)
    .page (`${URLS.LOGINPAGE_URL}`);

test.meta({type: "regression", id: "TC-1"})
    ("As a registered user I should be able to sucessfull login using valid credentials", async t => {

        await loginHelper.logInAction(USERS.SALESFORCE_ADMIN.EMAIL, USERS.SALESFORCE_ADMIN.PASSWORD);
        await t.expect(headerHelper.userNavLink.innerText).contains(USERS.SALESFORCE_ADMIN.NAME, 'profile name not displayed, login unsuccesfull');

})

test.meta({type: "regression", id: "TC-3"})
    ("As a registered user I should be able to sucessfull logout", async t => {

        await loginHelper.logInAction(USERS.SALESFORCE_ADMIN.EMAIL, USERS.SALESFORCE_ADMIN.PASSWORD);
        await headerHelper.logoutAction();
        await t.expect(LoginPage.usernameInput.visible).ok('username input is not displayed, logout unsuccesfull');
        await t.navigateTo(URLS.HOMEPAGE_URL);
        await t.expect(LoginPage.usernameInput.visible).ok('username input is not displayed, logout unsuccesfull');   
}).skipJsErrors();




