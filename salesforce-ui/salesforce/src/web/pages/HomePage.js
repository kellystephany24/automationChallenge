import { Selector, t } from 'testcafe';

class HomePage {
    constructor () {
        this.homePageIcon = Selector ('[data-key="home"]');
    }
    
    async waitForHomePageIconToLoad() {
        await t.click(this.homePageIcon);
    }

}

export default new HomePage();