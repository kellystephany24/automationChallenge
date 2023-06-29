import { Selector, t } from 'testcafe';


class SearchResultsPage {
    constructor () {
        this.firstSearchResult = Selector('.displayName').nth(0);
    }
}

export default new SearchResultsPage();
