import {Selector} from 'testcafe';

fixture('Testing LobLaw Website')
    .page('https://www.loblaws.ca/');

test('Search apples and sort the search results', async t => {
    
    await t
        // Maximize browser window
        .maximizeWindow();
    
    await t
        // Switching to iframe and closing it
        .switchToIframe(Selector('.sl-show-animation .sl-frame'))
        .click('#i-1')
        .switchToMainWindow();
        
    await t
        // Inserting 'apples' text in the search bar
        .typeText('#search-bar', 'apples')
        // Start searching
        .pressKey('enter')
        
        // Checking the search result
        .expect(Selector('.term-result-found').innerText).contains('"APPLES"');
    
        // Sorting search results from highest price to lowest price.
        const sorting = Selector('button')
        .withText('Price (High to Low)')
    
        const selected = Selector('.btn-sort-link  selected');
    
    await t
        // Clicking the 'price-desc' button
        .click(sorting);
    
    await t
        .expect(selected);
    
});




