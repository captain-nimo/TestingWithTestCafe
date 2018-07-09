import {Selector} from 'testcafe';
import config from './config.json';
import {closingIframe, searchItem, sortSearchResults, checkSorting} from './utilities.js';

fixture('Loblaw website in french')
    .page(config.baseUrl);

test('Search for item and sort the search results', async t => {
    
    await t
        .maximizeWindow(); // Calling library fuction to maximize browser window
    
    await closingIframe(t); // Calling function from 'utilities.js' to close the iFrame
    
    await t
        .click(Selector(config.languageFrench)); // Setting language as French
    
    await searchItem(t, 'pommes', 'POMMES'); // Calling function from 'utilities.js' to search item in the search bar
    
    await sortSearchResults(t); // Calling function from 'utilities.js' to sort the search results
    
    await checkSorting(t); // Calling function from 'utilities.js' to check if sorting is cottect
    
});