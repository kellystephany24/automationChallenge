import headerHelper  from '../src/web/common/HeaderHelper';
import loginHelper  from '../src/web/common/LoginHelper';
import searchResultsPage from '../src/web/pages/SearchResultsPage';
import { URLS } from '../src/constants/EnvUrls';
import { USERS}  from '../src/constants/Users';



fixture (`Search Results Page Testing`)
    .page (`${URLS.LOGINPAGE_URL}`);

test.meta({type: "regression", id: "TC-2"})
    ("As a user I should be able to get correct results when using search bar", async t => {

        await loginHelper.logInAction(USERS.SALESFORCE_ADMIN.EMAIL, USERS.SALESFORCE_ADMIN.PASSWORD);
        await t.navigateTo(URLS.HOMEPAGE_URL);
        await headerHelper.searchAction(USERS.TESTING_USER.NAME);
        await t.expect(searchResultsPage.firstSearchResult.innerText).contains('Testing User', 'search result not displayed');
        await headerHelper.searchAction('Chatter Expert');
        await t.expect(searchResultsPage.firstSearchResult.innerText).contains('Chatter Expert', 'search result not displayed');
}).skipJsErrors();
