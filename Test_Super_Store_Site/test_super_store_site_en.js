import {Selector} from 'testcafe';
import config from './config.json';
import {selectLocation, closingIframe, searchItem, checkDealBadge} from './utilities.js';

fixture('Real Canadian Superstore website')
    .page(config.baseUrl);

test('Search for item and check deal badge', async t => {
    
    await t
        .maximizeWindow(); // Calling library function to maximize browser window
    
    await selectLocation(t); // Calling function from 'utilities.js' to select location
    
    await closingIframe(t); // CCalling function from 'utilities.js' to close the iFrame
    
    await searchItem(t, 'oranges', 'ORANGES'); // Calling function from 'utilities.js' to search item in the search bar
    
    await checkDealBadge(t); // Calling function from 'utilities.js' to check deal badge presence in the search result page
    
});