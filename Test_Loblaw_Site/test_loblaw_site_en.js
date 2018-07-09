import {Selector} from 'testcafe';
import config from './lobLaw_config.json';
import {closingIframe, search, sort} from './loblaw_utilities.js';

fixture('Loblaw website in english')
    .page(config.baseUrl);

test('Search for item and sort the search results', async t => {
    
    await t
        .maximizeWindow(); // Maximize browser window
    
    await closingIframe(t); // Called function to close the iFrame
    
    await search(t); // Called function to search item
    
    await sort(t); // Called function to sort the search results
    
});
