import {Selector} from 'testcafe';
import config from './config.json';
import {selectLocation, closingIframe, searchItem, checkDealBadge} from './utilities.js';

fixture('Real Canadian Superstore website in mobile screen')
    .page(config.baseUrl);

test('Search for item and check deal badge', async t => {
    
    await t
        // Calling library function to set browser window size to iPhone 5S
        .resizeWindowToFitDevice('iPhone 5S', {
            portraitOrientation: true
        });
    
    await selectLocation(t); // Calling function from 'utilities.js' to select location
    
    await closingIframe(t); // Calling function from 'utilities.js' to close the iFrame
    
    await searchItem(t, 'oranges', 'ORANGES'); // Calling function from 'utilities.js' to search item in the search bar
    
    await checkDealBadge(t); // Calling function from 'utilities.js' to check deal badge presence in the search result page
    
});